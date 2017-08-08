import { Observable } from 'rxjs/Rx'

export abstract class UseCase<Q extends RequestValue, R extends ResponseValue> {
  protected abstract execute(reqValue:Q): Observable<R>
}

export abstract class InputOnlyUseCase<Q extends RequestValue, R extends NoResponseValue> extends UseCase<Q, R>{
}

export abstract class OutputOnlyUseCase<Q extends NoRequestValue, R extends ResponseValue> extends UseCase<Q, R> {
  protected abstract simpleExecute():Observable<R>
  execute(reqValue:NoResponseValue):Observable<R> { return this.simpleExecute()}
}

export abstract class SimpleUseCase<Q extends NoRequestValue, R extends NoResponseValue> extends UseCase<Q, R> {
  protected abstract simpleExecute():Observable<NoResponseValue>
  execute(reqValue:NoResponseValue):Observable<NoResponseValue> { return this.simpleExecute()}
}

export interface RequestValue{}

export interface ResponseValue{}

export class NoRequestValue implements RequestValue {
  private constructor(){}
  public static getInstance():NoRequestValue { return this }
}

export class NoResponseValue implements ResponseValue {
   private constructor(){}
   public static getInstance():NoResponseValue { return this}
}
