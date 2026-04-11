__d(
  "WASmaxParseJid",
  ["WAJids", "WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateUserJid,
        "UserJid",
      );
    }
    function s(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateLidUserJid,
        "LidUserJid",
      );
    }
    function u(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateDeviceJid,
        "DeviceJid",
      );
    }
    function c(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateGroupJid,
        "GroupJid",
      );
    }
    function d(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateCallJid,
        "CallJid",
      );
    }
    function m(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateDomainJid,
        "DomainJid",
      );
    }
    function p(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateBroadcastJid,
        "BroadcastJid",
      );
    }
    function _(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateStatusJid,
        "StatusJid",
      );
    }
    function f(e, t) {
      return o("WASmaxParseUtils").attrValidate(
        e,
        t,
        o("WAJids").validateNewsletterJid,
        "NewsletterJid",
      );
    }
    function g(e, t, n) {
      var r = o("WASmaxParseUtils").attrString(e, t);
      if (!r.success) return r;
      for (var a = n.typeName, i = n.validators, l = 0; l < i.length; l++) {
        var s = i[l](r.value);
        if (s != null) return o("WAResultOrError").makeResult(s);
      }
      return o("WASmaxParseUtils").errorMessage(
        e,
        'to have "' + t + '"={' + a + '}, but instead has "' + r.value + '"',
      );
    }
    function h(e, t, n, r) {
      var a = e(t, n);
      return !a.success || a.value === r
        ? a
        : o("WASmaxParseUtils").errorMessage(
            t,
            'to have "' +
              n +
              '"={' +
              r +
              '}, but instead has "' +
              a.value +
              '"',
          );
    }
    function y(e, t, n, r) {
      var a = o("WASmaxParseUtils").optional(e, t, n);
      return !a.success || a.value == null || a.value === r
        ? a
        : o("WASmaxParseUtils").errorMessage(
            t,
            'to have "' +
              n +
              '"={' +
              r +
              '}, but instead has "' +
              a.value +
              '"',
          );
    }
    ((l.attrUserJid = e),
      (l.attrLidUserJid = s),
      (l.attrDeviceJid = u),
      (l.attrGroupJid = c),
      (l.attrCallJid = d),
      (l.attrDomainJid = m),
      (l.attrBroadcastJid = p),
      (l.attrStatusJid = _),
      (l.attrNewsletterJid = f),
      (l.attrJidEnum = g),
      (l.literalJid = h),
      (l.optionalLiteralJid = y));
  },
  98,
);
