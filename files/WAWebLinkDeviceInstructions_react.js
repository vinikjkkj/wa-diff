__d(
  "WAWebLinkDeviceInstructions.react",
  [
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructionsList.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return [
        s.jsx(
          o("WAWebLinkDeviceCommonInstructions.react")
            .LinkDeviceInstructionPhoneCamera,
          {},
          "step1",
        ),
        s.jsx(
          o("WAWebLinkDeviceCommonInstructions.react")
            .LinkDeviceInstructionOpenWhatsApp,
          {},
          "step2",
        ),
        s.jsx(
          o("WAWebLinkDeviceCommonInstructions.react")
            .LinkDeviceInstructionScanCodeAgain,
          {},
          "step3",
        ),
      ];
    }
    function c() {
      var e;
      return [
        s.jsx(
          (e = o("WAWebLinkDeviceCommonInstructions.react"))
            .LinkDeviceInstructionOpenWhatsAppOnPhone,
          {},
          "step1",
        ),
        s.jsx(e.LinkDeviceInstructionNavigateToSettings, {}, "step2"),
        s.jsx(e.LinkDeviceInstructionsTapLinkedDevices, {}, "step3"),
        s.jsx(e.LinkDeviceInstructionsLinkWithPhoneNumberInstead, {}, "step4"),
      ];
    }
    function d(e) {
      var t = e.codeType,
        n = [];
      switch (t) {
        case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR:
          n = u();
          break;
        case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType
          .PHONE_NUMBER_LINK_CODE:
          n = c();
          break;
      }
      return s.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
        instructions: n,
        instructionSource: String(t),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
