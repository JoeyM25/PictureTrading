import { Routes } from '@angular/router';
import { Market } from './pages/market/market';
import { Portfolio } from './pages/portfolio/portfolio';
import { Leaderboard } from './pages/leaderboard/leaderboard';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'market', component: Market},
    { path: 'portfolio', component: Portfolio},
    { path: 'leaderboard', component: Leaderboard}
];
