import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: "circular-progress-bar",
    template: `
    <GridLayout [height]="height" [width]="height">
        <RadRadialGauge>
            <RadialScale tkRadialGaugeScales startAngle="-90" sweepAngle="360">
                <ScaleStyle tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0">
                </ScaleStyle>
                <RadialBarIndicator tkRadialScaleIndicators minimum="0" maximum="100">
                    <BarIndicatorStyle tkRadialBarIndicatorStyle [fillColor]="fillBackgroundColor" cap="Round" barWidth="0.05">
                    </BarIndicatorStyle>
                </RadialBarIndicator>
                <RadialBarIndicator tkRadialScaleIndicators minimum="0" [maximum]="progreso" isAnimated="true">
                    <BarIndicatorStyle tkRadialBarIndicatorStyle [fillColor]="fillColor" cap="Round" barWidth="0.05">
                    </BarIndicatorStyle>
                </RadialBarIndicator>
            </RadialScale>
        </RadRadialGauge>
        <StackLayout marginTop="20%">
            <Label text="Token de Seguridad" fontSize="18" class="m-x-auto" marginTop="20"></Label>
            <Label [text]="token" fontSize="35" fontWeight="bold" class="m-x-auto text-token" marginTop="15"></Label>
            <Label [text]="cuentaRegresiva" fontSize="18" class="m-x-auto" marginTop="35"></Label>
        </StackLayout>
    </GridLayout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircularProgressBarComponent implements OnInit {

    @Input() size = 100;
    @Input() progress = 0;
    @Input() textColor = "#bfbfc4";
    @Input() fillColor = "#4d62c1"; // barra progreso
    @Input() fillBackgroundColor = "#efeff4"; // grys palido
    @Input() offset = 0;
    @Input() token = '';
    @Input() periodoExp = 0;

    constructor() {
        
    }

    ngOnInit(): void {
        console.log(this.periodoExp);
    }

    get height(): number {
        return Math.min(this.size, 300);
    };

    get scaleTime() {
        return Math.round(100 / this.periodoExp);
    }

    get progreso(): number {
        return this.progress * (100 / this.periodoExp);
    }

    get cuentaRegresiva() {
        return `${this.progress.toFixed()} s`;
    };

    get textSize() {
        return this.height / 2.5;
    };

}