export enum DepreciationMethod {
    StraightLine = 'STRAIGHT_LINE',
    DecliningBalance = 'DECLINING_BALANCE'
}

export interface FixedAsset {
    id: string;
    name: string;
    acquisitionDate: Date;
    startUseDate: Date;
    acquisitionValue: number;
    usefulLife: number; // dalam tahun
    depreciationMethod: DepreciationMethod;
    depreciationValue?: number; // nilai penyusutan hingga saat ini
}

export class FixedAssetsManager {
    private assets: FixedAsset[] = [];

    addAsset(asset: FixedAsset): void {
        this.assets.push(asset);
    }

    listAssets(): FixedAsset[] {
        return this.assets;
    }

    calculateDepreciation(assetId: string, asOfDate: Date): number | null {
        const asset = this.assets.find(a => a.id === assetId);
        if (!asset) return null;

        const yearsUsed = (asOfDate.getTime() - asset.startUseDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
        
        let depreciation = 0;
        switch (asset.depreciationMethod) {
            case DepreciationMethod.StraightLine:
                depreciation = asset.acquisitionValue * Math.min(yearsUsed, asset.usefulLife) / asset.usefulLife;
                break;
            case DepreciationMethod.DecliningBalance:
                const rate = 2 / asset.usefulLife;
                let bookValue = asset.acquisitionValue;
                let totalDepreciation = 0;
                let years = Math.floor(yearsUsed);
                for (let i = 0; i < years; i++) {
                    const dep = bookValue * rate;
                    totalDepreciation += dep;
                    bookValue -= dep;
                }
                depreciation = totalDepreciation;
                break;
            default:
                break;
        }
        asset.depreciationValue = depreciation;
        return depreciation;
    }
}