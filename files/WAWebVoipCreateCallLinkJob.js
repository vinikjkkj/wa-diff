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
        n = e.creatorUsername,
        a = e.eventStartTime,
        i = e.requireApproval,
        l = await o("WASmaxVoipLinkCreateRPC").sendLinkCreateRPC({
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
          return u(s, l.value.linkCreateToken);
        }
        case "LinkCreateResponseLinkCreateNack": {
          var d = l.value.error;
          switch (d) {
            case "503":
              return c({ code: d, text: "Service Unavailable" });
            case "400":
              return c({ code: d, text: "Bad Request" });
            default:
              return c({ code: d, text: "Unknown Error" });
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
