__d(
  "WAWebLinkDeviceInstructions.react",
  [
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructionsList.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.codeType,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (t[0] = a))
        : (a = t[0]);
      var i = a;
      e: switch (n) {
        case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType
          .QR: {
          var l;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = u()), (t[1] = l))
            : (l = t[1]),
            (i = l));
          break e;
        }
        case o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType
          .PHONE_NUMBER_LINK_CODE: {
          var d;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = c()), (t[2] = d))
            : (d = t[2]),
            (i = d));
        }
      }
      var m = i,
        p = String(n),
        _;
      return (
        t[3] !== i || t[4] !== p
          ? ((_ = s.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
              instructions: m,
              instructionSource: p,
            })),
            (t[3] = i),
            (t[4] = p),
            (t[5] = _))
          : (_ = t[5]),
        _
      );
    }
    l.default = d;
  },
  98,
);
