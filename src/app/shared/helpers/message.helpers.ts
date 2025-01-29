export class messageHelper {
  static getErrorMessage(err: any): string {
    return err?.error?.message || 'An unexpected error occurred.';
  }
}
