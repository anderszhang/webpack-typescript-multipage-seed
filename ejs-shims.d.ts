declare module "*.ejs" {
  const templateFunction: import('ejs').TemplateFunction;
    export default templateFunction;
}