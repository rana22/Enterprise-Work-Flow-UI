import { BinderModule } from './binder.module';

describe('BinderModule', () => {
  let binderModule: BinderModule;

  beforeEach(() => {
    binderModule = new BinderModule();
  });

  it('should create an instance', () => {
    expect(binderModule).toBeTruthy();
  });
});
