/// <reference types="jquery" />
import { Component, AllHTMLAttributes, ReactNode } from 'react';
import { CarouselOptions } from './carouselOptions';
import 'owl.carousel';
export declare type ComponentProps = Readonly<AllHTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
}>;
export declare type OwlCarouselProps = CarouselOptions & ComponentProps;
export default class ReactOwlCarousel extends Component<OwlCarouselProps> {
    $ele?: JQuery<HTMLElement>;
    private container?;
    private propsWithoutOptions;
    private options;
    constructor(props: OwlCarouselProps);
    componentDidMount(): void;
    UNSAFE_componentWillUpdate(): void;
    componentDidUpdate(): void;
    next(speed: number | number[]): void;
    prev(speed: number | number[]): void;
    to(position: number, speed: number): void;
    create(options?: CarouselOptions): void;
    destory(): void;
    play(timeout: number, speed: number): void;
    stop(): void;
    render(): JSX.Element;
    private containerRef;
}
export * from './carouselOptions';
