export interface UseCase<Request, Response> {
  run(request: Request): Promise<Response>;
}
