__d(
  "WAWebVoipCreateCallLinkJob",
  [
    "WALogger",
    "WASmaxInVoipEnums",
    "WASmaxVoipLinkCreateRPC",
    "WAWebBackendErrors",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = e.callType,
        n = e.eventStartTime,
        a = e.requireApproval,
        i = await o("WASmaxVoipLinkCreateRPC").sendLinkCreateRPC({
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
          return u(l, i.value.linkCreateToken);
        }
        case "LinkCreateResponseLinkCreateNack": {
          var s = i.value.error;
          switch (s) {
            case "503":
              return c({ code: s, text: "Service Unavailable" });
            case "400":
              return c({ code: s, text: "Bad Request" });
            default:
              return c({ code: s, text: "Unknown Error" });
          }
        }
      }
    }
    function u(e, t) {
      return "https://call.whatsapp.com/" + e + "/" + t;
    }
    function c(t) {
      var n = t.code,
        r = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "createEventCallLink failed: ",
              ":",
              "",
            ])),
          n,
          r,
        ),
        Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(n), r),
        )
      );
    }
    l.createCallLinkJob = s;
  },
  98,
);
