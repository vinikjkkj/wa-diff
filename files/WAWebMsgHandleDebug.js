__d(
  "WAWebMsgHandleDebug",
  ["WALogger", "WAWebMsgProcessingDecryptionHandler"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = !1,
      f;
    function g(t, n) {
      return _ !== !1
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[msg] postpone initialization for ",
                "",
              ])),
            t,
          ),
          (f = function () {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[msg] serialize postponed node ",
                  "",
                ])),
              t,
            ),
              n(t),
              (f = null));
          }),
          typeof _ == "number"
            ? (self.setTimeout(f, _ * 1e3),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[msg] postponed ",
                    "s or Debug.serializePostponedMessage",
                  ])),
                _,
              ))
            : o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[msg] postponed until Debug.serializePostponedMessage",
                  ])),
              ),
          (_ = !1),
          !0)
        : !1;
    }
    function h(e) {
      return ((_ = e == null ? !0 : e), "ok");
    }
    h.doc =
      "The next incoming message is postponed until:\na) passed argument in seconds expired\nb) Debug.serializePostponedMessage is called\n";
    function y() {
      return f != null ? (f(), "done") : "no postponed messages";
    }
    y.doc = "Serialize previously postponed message";
    var C = [];
    function b(e, t) {
      for (var n = 0; n < t; n++) C.push(e);
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[msg] Message drop queue = ",
            "",
          ])),
        C.join(", "),
      );
    }
    function v() {
      if (C.length === 0) return null;
      var e = C.shift();
      return (
        C.length === 0
          ? o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[msg] Dropping with ",
                  ", drop queue is empty.",
                ])),
              e,
            )
          : o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[msg] Dropping with ",
                  ", remaining drop queue = ",
                  "",
                ])),
              e,
              C.join(", "),
            ),
        e
      );
    }
    function S(e) {
      (e === void 0 && (e = 1),
        b(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .SignalRetryable,
          e,
        ));
    }
    S.doc = "Drop next N=1 incoming message with a signal decryption error";
    function R(e) {
      (e === void 0 && (e = 1),
        b(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .SignalDuplicateMessage,
          e,
        ));
    }
    R.doc =
      "Drop next N=1 incoming message with a signal duplicate message error";
    function L(e) {
      (e === void 0 && (e = 1),
        b(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .InvalidProtobuf,
          e,
        ));
    }
    L.doc = "Drop next N=1 incoming message with an invalid protobuf error";
    function E(e) {
      (e === void 0 && (e = 1),
        b(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .DeviceSentMessage,
          e,
        ));
    }
    E.doc = "Drop next N=1 incoming message with a device sent error";
    var k = {
      isNextMessagePostponed: g,
      postponeNextMessageSerialization: h,
      serializePostponedMessage: y,
      isNextMessageDropped: v,
      dropWithDecryptionError: S,
      dropWithDuplicateMessageError: R,
      dropWithInvalidProtobufError: L,
      dropWithDeviceSentError: E,
    };
    l.default = k;
  },
  98,
);
