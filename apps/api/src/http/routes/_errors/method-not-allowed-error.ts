export class MethodNotAllowedError extends Error {
  constructor(message?: string) {
    super(message ?? 'Method not allowed')
  }
}
