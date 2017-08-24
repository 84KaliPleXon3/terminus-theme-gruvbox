import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'terminus-core'

@Injectable()
class GruvboxTheme extends Theme {
    name = 'Gruvbox'
    css = require('./theme.scss')
    terminalBackground = '#282828'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: GruvboxTheme, multi: true },
    ],
})
export default class GruvboxThemeModule { }
