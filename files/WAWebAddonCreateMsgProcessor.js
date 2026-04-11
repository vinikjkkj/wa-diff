__d(
  "WAWebAddonCreateMsgProcessor",
  ["WAWebAddonConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e, {
        type: o("WAWebAddonConstants").AddonProcessorType.Regular,
      });
    }
    function s(e) {
      return babelHelpers.extends({}, e, {
        type: o("WAWebAddonConstants").AddonProcessorType.DualEncrypted,
      });
    }
    function u(e) {
      return babelHelpers.extends({}, e, {
        type: o("WAWebAddonConstants").AddonProcessorType
          .DualEncryptedWithMessageTraits,
      });
    }
    ((l.createAddonMsgProcessor = e),
      (l.createAddonMsgProcessorDualEncrypted = s),
      (l.createAddonMessageProcessorDualEncryptedWithMessageTraits = u));
  },
  98,
);
