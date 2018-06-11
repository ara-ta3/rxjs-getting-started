import { from, Subject, Subscriber } from 'rxjs';

function hoge(): Promise<string> {
    return new Promise((_: Function, reject: Function) => {
        reject(new Error("hoge"));
    });
}

function fromWrapper<T, U>(p: Promise<T>, onSuccess: (v: T) => U) {
    return from<T>(p).subscribe(onSuccess, (e: Error) => console.error(e));
}

async function main() {
    const s = new Subject<number>();
    s.subscribe((v) => {
        Subscriber
        console.log(v);
    })
    s.next(1);
    s.next(2);
    s.next(3);

    from(hoge()).subscribe((v) => {
        console.log(v);
    }, (e: Error) => {
        console.log("on error");
        console.error(e);
    });


    fromWrapper(hoge(), (v) => console.log(v));

    // try {
    //     from(hoge()).subscribe((v) => {
    //         console.log(v);
    //     });
    // } catch (e) {
    //     console.log("catched");
    //     console.error(e);
    // }
}

try {
    main();
} catch (e) {
    console.log("main try catch");
    console.error(e);
}
