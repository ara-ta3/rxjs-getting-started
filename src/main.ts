import { from, Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

function hoge(): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
        reject(new Error("hoge"));
    });
}

function fuga(): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
        reject(new Error("fuga"));
    });
}

async function main() {
    const s = new Subject<number>();
    from(hoge()).subscribe((v) => {
        console.log(v);
    })
    s.subscribe((v) => {
        console.log(v);
    })
    s.next(1);
    s.next(2);
    s.next(3);
}

main();