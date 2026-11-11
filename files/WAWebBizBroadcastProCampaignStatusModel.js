__d(
  "WAWebBizBroadcastProCampaignStatusModel",
  [
    "WALogger",
    "WAWebBaseModel",
    "WAWebBizBroadcastProCampaignStatusCollection",
    "WAWebModelUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebModelUtils").prop()),
            (e.displayStatus = o("WAWebModelUtils").prop()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.markStale = function () {
            ((this.stale = !0),
              this.hasObservers() &&
                this.getCollection()
                  .find(this.id)
                  .catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to refresh BB Pro campaign status",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("bb-pro-campaign-status-refresh-failed");
                  }));
          }),
          (a.getCollection = function () {
            return r("WAWebBizBroadcastProCampaignStatusCollection");
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "bizBroadcastProCampaignStatus";
    var u = o("WAWebBaseModel").defineModel(s);
    l.BizBroadcastProCampaignStatus = u;
  },
  98,
);
