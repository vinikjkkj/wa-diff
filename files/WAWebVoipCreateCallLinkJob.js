__d(
  "WAWebVoipCreateCallLinkJob",
  [
    "Promise",
    "WALogger",
    "WASmaxInVoipEnums",
    "WASmaxVoipLinkCreateRPC",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callType,
            n = e.eventStartTime,
            a = e.requireApproval,
            i = yield o("WASmaxVoipLinkCreateRPC").sendLinkCreateRPC({
              eventArgs: n == null ? null : { eventStartTime: n },
              linkCreateMedia: t,
              callTo: r("nullthrows")(
                o("WASmaxInVoipEnums").CALLJID_DOMAINJID.validators[1]("call"),
              ),
              hasLinkCreateWaitingRoomEnabled1: a === !0,
            });
          switch (i.name) {
            case "LinkCreateResponseLinkCreateAck": {
              var l = i.value.linkCreateMedia === "audio" ? "voice" : "video";
              return d(l, i.value.linkCreateToken);
            }
            case "LinkCreateResponseLinkCreateNack": {
              var s = i.value.error;
              switch (s) {
                case "503":
                  return m({ code: s, text: "Service Unavailable" });
                case "400":
                  return m({ code: s, text: "Bad Request" });
                default:
                  return m({ code: s, text: "Unknown Error" });
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return "https://call.whatsapp.com/" + e + "/" + t;
    }
    function m(t) {
      var r = t.code,
        a = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "createEventCallLink failed: ",
              ":",
              "",
            ])),
          r,
          a,
        ),
        (s || (s = n("Promise"))).reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(r), a),
        )
      );
    }
    l.createCallLinkJob = u;
  },
  98,
);
