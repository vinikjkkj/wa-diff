__d(
  "WAWebEventResponseCollection",
  [
    "WANullthrows",
    "WAWebAck",
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebEventResponseModel",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.byParent = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.parentMsgKey;
          })),
          (t.byIsFailedByMe = o("WAWebCollectionUtils").aggregated(
            function (e) {
              return (
                e.isSendFailure === !0 ||
                (o("WAWebUserPrefsMeUser").isMeAccount(e.sender) &&
                  e.ack != null &&
                  e.ack < o("WAWebAck").ACK.CLOCK)
              );
            },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebEventResponseModel").EventResponse;
    function s(e) {
      return new (o("WAWebEventResponseModel").EventResponse)(
        babelHelpers.extends({}, e, {
          sender: r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
        }),
      );
    }
    var u = new e();
    ((l.createEventResponseModel = s), (l.EventResponseCollection = u));
  },
  98,
);
