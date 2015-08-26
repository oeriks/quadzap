/// <reference path="jquery.d.ts" />

interface JQueryVelocity {
  velocity(...args: any[]): void;
}

interface JQuery {
  velocity: JQueryVelocity;
}
