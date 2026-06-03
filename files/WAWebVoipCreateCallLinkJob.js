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
            n = e.creatorUsername,
            a = e.eventStartTime,
            i = e.requireApproval,
            l = yield o("WASmaxVoipLinkCreateRPC").sendLinkCreateRPC({
              eventArgs: a == null ? null : { eventStartTime: a },
              linkCreateMedia: t,
              callTo: r("nullthrows")(
                o("WASmaxInVoipEnums").CALLJID_DOMAINJID.validators[1]("call"),
              ),
              linkCreateLinkCreatorUsername: n != null ? n : void 0,
              hasLinkCreateWaitingRoomEnabled1: i === !0,
            });
          switch (l.name) {
            case "LinkCreateResponseLinkCreateAck": {
              var s = l.value.linkCreateMedia === "audio" ? "voice" : "video";
              return d(s, l.value.linkCreateToken);
            }
            case "LinkCreateResponseLinkCreateNack": {
              var u = l.value.error;
              switch (u) {
                case "503":
                  return m({ code: u, text: "Service Unavailable" });
                case "400":
                  return m({ code: u, text: "Bad Request" });
                default:
                  return m({ code: u, text: "Unknown Error" });
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
