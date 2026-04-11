__d(
  "WAWebEventResponseModel",
  [
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebEventResponseGetters",
    "WAWebFrontendEventResponseGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.parentMsgKey = o("WAWebBaseModel").prop()),
            (t.eventResponse = o("WAWebBaseModel").prop()),
            (t.senderTimestampMs = o("WAWebBaseModel").prop()),
            (t.t = o("WAWebBaseModel").prop()),
            (t.sender = o("WAWebBaseModel").prop()),
            (t.read = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.delete = function () {
            (e.prototype.delete.call(this),
              o("WAWebEventResponseGetters").clearEventResponseGetterCacheFor(
                this,
              ),
              o(
                "WAWebFrontendEventResponseGetters",
              ).clearFrontendEventResponseGetterCacheFor(this));
          }),
          t
        );
      })(o("WAWebAddOnModel").AddOnBaseModel),
      s = o("WAWebBaseModel").defineModel(e);
    l.EventResponse = s;
  },
  98,
);
