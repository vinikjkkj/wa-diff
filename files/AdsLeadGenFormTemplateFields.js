__d(
  "AdsLeadGenFormTemplateFields",
  ["AdsApiLeadGenLocale", "AdsLeadGenFormFieldsForTemplate", "CurrentLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "en_US",
      s = String(r("CurrentLocale").get()).toUpperCase();
    Object.prototype.hasOwnProperty.call(r("AdsApiLeadGenLocale"), s) &&
      (e = String(r("AdsApiLeadGenLocale")[s]));
    var u = [
      "id",
      "translated_template_description.locale(" + e + ")",
      "translated_template_name.locale(" + e + ")",
      "template_form{" + r("AdsLeadGenFormFieldsForTemplate").toString() + "}",
      "form_template_type",
      "translated_template_content.locale(" + e + ")",
    ];
    l.default = u;
  },
  98,
);
