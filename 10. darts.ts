// https://exercism.org/tracks/typescript/exercises/darts

// Distance formula is √[(x2 – x1)^2 + (y2 – y1)^2]. Since one of the points is always (0, 0), the formula can be simplified to √[(x2)^2 + (y2)^2].
const calculateDistance = (x: number, y: number): number => Math.sqrt(x ** 2 + y ** 2);

enum DartRadii {
    OuterCircle = 10.0,
    MiddleCircle = 5.0,
    InnerCircle = 1.0
}

export function score(x: number, y: number): number {
    const distance = calculateDistance(x, y);
    switch (true) {
        case (distance > DartRadii.OuterCircle):
            return 0;
        case (distance > DartRadii.MiddleCircle):
            return 1;
        case (distance > DartRadii.InnerCircle):
            return 5;
        default:
            return 10;
    }
}