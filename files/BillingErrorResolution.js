__d(
  "BillingErrorResolution",
  [
    "BillingErrorResolutionSchema",
    "BillingWizardLink.react",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function () {
        function e(e) {
          this.errorCodeMappingSchema = new Map(e);
        }
        var t = e.prototype;
        return (
          (t.registerErrorAction = function (t, n) {
            this.errorCodeMappingSchema.has(t) ||
              this.errorCodeMappingSchema.set(t, []);
            var e = this.errorCodeMappingSchema.get(t);
            e != null && e.push(n);
          }),
          (t.resolveError = function (t) {
            var e = this,
              n = this.errorCodeMappingSchema.get(t);
            n &&
              n.forEach(function (t) {
                var n = t.actionData;
                switch (t.errorAction) {
                  case "REDIRECT":
                    "link" in n &&
                      "type" in n &&
                      (n.type === "ExternalLink"
                        ? e.navigateToExternalFlow(n)
                        : n.type === "BillingWizardFlow" &&
                          e.navigateToWizardFlow(n));
                    break;
                  case "ASYNC_CALLBACK":
                    "callbackFunction" in n && e.asyncCallback(n);
                    break;
                  case "BUSINESS_ASSISTANT":
                    "assistantId" in n && e.businessAssistant(n);
                    break;
                  default:
                }
              });
          }),
          (t.parseErrorCodesAndReplaceWithLinks = function (t) {
            var e,
              n = this,
              o =
                (t == null ||
                (e = t.originalError) == null ||
                (e = e.source) == null ||
                (e = e.description_raw) == null
                  ? void 0
                  : e.__html) || "";
            if (!o || !o.includes("<errorcode:")) return null;
            for (
              var a = /<errorcode:([^>]+)>([^<]+)<\/errorcode:\1>/g,
                i = [],
                l = 0,
                u,
                c = function () {
                  if (u == null) return 1;
                  u.index > l &&
                    o.substring(l, u.index) != null &&
                    i.push(o.substring(l, u.index));
                  var e = u[1],
                    t = u[2];
                  (i.push(
                    s.jsx(r("BillingWizardLink.react"), {
                      color: "highlight",
                      inline: !0,
                      label: t,
                      onClick: function () {
                        n.resolveError(e);
                      },
                    }),
                  ),
                    (l = a.lastIndex));
                };
              (u = a.exec(o)) && !c();
            );
            return (
              l < o.length && o.substring(l) != null && i.push(o.substring(l)),
              i.length === 0 ? null : i
            );
          }),
          (t.navigateToExternalFlow = function (t) {}),
          (t.navigateToWizardFlow = function (t) {}),
          (t.asyncCallback = function (t) {
            r("promiseDone")(t.callbackFunction());
          }),
          (t.businessAssistant = function (t) {}),
          e
        );
      })(),
      c = null;
    function d() {
      return (
        c == null &&
          (c = new u(
            o("BillingErrorResolutionSchema")
              .BillingErrorResolutionDefaultSchema,
          )),
        c
      );
    }
    var m = d(),
      p = m;
    l.default = p;
  },
  98,
);
