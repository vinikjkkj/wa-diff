__d(
  "WAWebMsgHandleDebug",
  [
    "WALogger",
    "WAWebMsgProcessingDecryptionHandler",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = !1,
      h;
    function y(t, n) {
      return g !== !1
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[msg] postpone initialization for ",
                "",
              ])),
            t,
          ),
          (h = function () {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[msg] serialize postponed node ",
                  "",
                ])),
              t,
            ),
              n(t),
              (h = null));
          }),
          typeof g == "number"
            ? (self.setTimeout(h, g * 1e3),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[msg] postponed ",
                    "s or Debug.serializePostponedMessage",
                  ])),
                g,
              ))
            : o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[msg] postponed until Debug.serializePostponedMessage",
                  ])),
              ),
          (g = !1),
          !0)
        : !1;
    }
    function C(e) {
      return ((g = e == null ? !0 : e), "ok");
    }
    C.doc =
      "The next incoming message is postponed until:\na) passed argument in seconds expired\nb) Debug.serializePostponedMessage is called\n";
    function b() {
      return h != null ? (h(), "done") : "no postponed messages";
    }
    b.doc = "Serialize previously postponed message";
    var v = !1,
      S;
    function R(e, t, n) {
      return v
        ? ((v = !1),
          (S = function () {
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[msg] decrypt held node ",
                    "",
                  ])),
                e,
              ),
              (S = null),
              t(e, n)
            );
          }),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[msg] held undecrypted until Debug.decryptHeldMessage",
              ])),
          ),
          !0)
        : !1;
    }
    function L() {
      return S != null
        ? "a message is already held \u2014 call Debug.decryptHeldMessage first"
        : ((v = !0), "ok");
    }
    L.doc =
      "Store the next incoming message as a ciphertext placeholder instead of decrypting it. It is acked, but not as delivered and not as a retry, so the server neither resends it nor is asked to. It keeps the position it arrived at. Release it with Debug.decryptHeldMessage.";
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            (v = !1),
            S == null ? "no held messages" : (yield S(), "done")
          );
        })),
        k.apply(this, arguments)
      );
    }
    E.doc =
      "Decrypt the message held by Debug.dontDecryptNextMessage, and cancel a pending request that never caught one. Replays the stanza through handleMsg, so a second ack is sent.";
    var I = [];
    function T(e, t) {
      for (var n = 0; n < t; n++) I.push(e);
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[msg] Message drop queue = ",
            "",
          ])),
        I.join(", "),
      );
    }
    function D() {
      if (I.length === 0) return null;
      var e = I.shift();
      return (
        I.length === 0
          ? o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[msg] Dropping with ",
                  ", drop queue is empty.",
                ])),
              e,
            )
          : o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[msg] Dropping with ",
                  ", remaining drop queue = ",
                  "",
                ])),
              e,
              I.join(", "),
            ),
        e
      );
    }
    function x(e) {
      (e === void 0 && (e = 1),
        T(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .SignalRetryable,
          e,
        ));
    }
    x.doc = "Drop next N=1 incoming message with a signal decryption error";
    function $(e) {
      (e === void 0 && (e = 1),
        T(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .SignalDuplicateMessage,
          e,
        ));
    }
    $.doc =
      "Drop next N=1 incoming message with a signal duplicate message error";
    function P(e) {
      (e === void 0 && (e = 1),
        T(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .InvalidProtobuf,
          e,
        ));
    }
    P.doc = "Drop next N=1 incoming message with an invalid protobuf error";
    function N(e) {
      (e === void 0 && (e = 1),
        T(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .DeviceSentMessage,
          e,
        ));
    }
    N.doc = "Drop next N=1 incoming message with a device sent error";
    var M = {
      isNextMessagePostponed: y,
      postponeNextMessageSerialization: C,
      serializePostponedMessage: b,
      consumeSkipDecryptRequest: R,
      dontDecryptNextMessage: L,
      decryptHeldMessage: E,
      isNextMessageDropped: D,
      dropWithDecryptionError: x,
      dropWithDuplicateMessageError: $,
      dropWithInvalidProtobufError: P,
      dropWithDeviceSentError: N,
    };
    l.default = M;
  },
  98,
);
