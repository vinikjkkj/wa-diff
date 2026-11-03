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
      _,
      f,
      g = !1,
      h;
    function y(t, n, r) {
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
              n(t, r),
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
    C.doc = `The next incoming message is postponed until:
a) passed argument in seconds expired
b) Debug.serializePostponedMessage is called
`;
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
    async function E() {
      return ((v = !1), S == null ? "no held messages" : (await S(), "done"));
    }
    E.doc =
      "Decrypt the message held by Debug.dontDecryptNextMessage, and cancel a pending request that never caught one. Replays the stanza through handleMsg, so a second ack is sent.";
    var k = [];
    function I(e, t) {
      for (var n = 0; n < t; n++) k.push(e);
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[msg] Message drop queue = ",
            "",
          ])),
        k.join(", "),
      );
    }
    function T() {
      if (k.length === 0) return null;
      var e = k.shift();
      return (
        k.length === 0
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
              k.join(", "),
            ),
        e
      );
    }
    function D(e) {
      (e === void 0 && (e = 1),
        I(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .SignalRetryable,
          e,
        ));
    }
    D.doc = "Drop next N=1 incoming message with a signal decryption error";
    function x(e) {
      (e === void 0 && (e = 1),
        I(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .SignalDuplicateMessage,
          e,
        ));
    }
    x.doc =
      "Drop next N=1 incoming message with a signal duplicate message error";
    function $(e) {
      (e === void 0 && (e = 1),
        I(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .InvalidProtobuf,
          e,
        ));
    }
    $.doc = "Drop next N=1 incoming message with an invalid protobuf error";
    function P(e) {
      (e === void 0 && (e = 1),
        I(
          o("WAWebMsgProcessingDecryptionHandler").DecryptionErrorType
            .DeviceSentMessage,
          e,
        ));
    }
    P.doc = "Drop next N=1 incoming message with a device sent error";
    var N = {
      isNextMessagePostponed: y,
      postponeNextMessageSerialization: C,
      serializePostponedMessage: b,
      consumeSkipDecryptRequest: R,
      dontDecryptNextMessage: L,
      decryptHeldMessage: E,
      isNextMessageDropped: T,
      dropWithDecryptionError: D,
      dropWithDuplicateMessageError: x,
      dropWithInvalidProtobufError: $,
      dropWithDeviceSentError: P,
    };
    l.default = N;
  },
  98,
);
