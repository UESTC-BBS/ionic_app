import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPipe } from './posttime';

@NgModule({
    declarations: [
        PostPipe
    ],
    imports: [CommonModule],
    exports: [PostPipe],
    providers: [],
})
export class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [
                PostPipe
            ],
        };
    }
}