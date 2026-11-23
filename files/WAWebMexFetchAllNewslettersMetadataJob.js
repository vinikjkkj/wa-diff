__d(
  "WAWebMexFetchAllNewslettersMetadataJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAllNewslettersMetadataJobQuery.graphql",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var r =
          e !== void 0
            ? e
            : (e = n("WAWebMexFetchAllNewslettersMetadataJobQuery.graphql")),
        a = await o("WAWebMexClient").fetchQuery(r, {
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
    }
    async function c() {
      var e = await u({
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
    }
    ((l.mexFetchAllNewsletters = u), (l.handleMexGetAllNewsletters = c));
  },
  98,
);
