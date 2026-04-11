__d(
  "WAWebMexFetchAllNewslettersMetadataJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAllNewslettersMetadataJobQuery.graphql",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebMexFetchAllNewslettersMetadataJobQuery.graphql",
                  )),
            a = yield o("WAWebMexClient").fetchQuery(r, {
              fetch_wamo_sub: (t == null ? void 0 : t.fetchWamoSub) === !0,
              fetch_status_metadata:
                (t == null ? void 0 : t.fetchStatusMetadata) === !0,
            });
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] fetched all newsletters job",
                  ])),
              )
              .tags("GQL", "MEX"),
            a
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield u({
              fetchWamoSub: o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubExperienceEnabled(),
              fetchStatusMetadata: o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled(),
            }),
            t = e == null ? void 0 : e.xwa2_newsletter_subscribed;
          if (e == null || t == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "Mex unexpected null response for fetching all metadata",
            );
          if (t.length === 0) return { newsletters: [] };
          var n = [],
            r = [];
          return (
            t
              .filter(function (e) {
                return e != null;
              })
              .map(function (e) {
                var t = o(
                  "WAWebMexNewsletterParseUtils",
                ).parseMexNewsletterResponse(e);
                if (t != null) {
                  var a;
                  (e == null || (a = e.state) == null ? void 0 : a.type) ===
                  "DELETED"
                    ? t != null && r.push({ jid: t.idJid })
                    : n.push(t);
                }
              }),
            n.length > 0 || r.length > 0
              ? {
                  newsletters: n,
                  deletedNewsletters: r.length > 0 ? { id: r } : null,
                }
              : { newsletters: [] }
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.mexFetchAllNewsletters = u), (l.handleMexGetAllNewsletters = d));
  },
  98,
);
