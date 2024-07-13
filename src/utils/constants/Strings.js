export default class StringsConstants {
  static permissionContact = {
    title: 'Contacts',
    message: 'The Bounce app would like to view your contacts.',
    buttonPositive: 'Please accept permission',
  };
  static requiredFieldError = (title = '') => {
    return ` ${title} is required.`;
  };
  static minimumFieldError = (title = '', len = 0) => {
    return `${title} should be ${len}`;
  };
  static urls = {
    REFUND_POLICY:
      'http://vidhiricetraders.com/refund-policy',
    PRIVACY_POLICY:
      'http://vidhiricetraders.com/privaciy-policy',
    T_AND_C:
      'http://vidhiricetraders.com/terms-condition',
  };
}
