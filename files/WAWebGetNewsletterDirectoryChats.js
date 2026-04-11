__d(
  "WAWebGetNewsletterDirectoryChats",
  [
    "Promise",
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          try {
            var i = a.skipSubscribedNewsletters,
              l = t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t,
                        o = r("WAWebNewsletterCollection").get(e.idJid);
                      return (o == null || (t = o.newsletterMetadata) == null
                        ? void 0
                        : t.isPreview) === !1
                        ? (yield p(o, e),
                          i
                            ? (s || (s = n("Promise"))).resolve(null)
                            : (s || (s = n("Promise"))).resolve(o))
                        : d(e);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              u = yield (s || (s = n("Promise"))).all(l);
            return u.filter(Boolean);
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[getDirectoryNewsletterChats] dir chats failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-search-newsletter-directory"),
              t
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebNewsletterModelUtils").mapDirectoryNewsletterToChat(e),
            r = o("WAWebNewsletterModelUtils").mapDirectoryNewsletterToMetadata(
              e,
            ),
            a =
              (t = e.newsletterPictureMetadataMixin) == null
                ? void 0
                : t.picture,
            i =
              a != null
                ? o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                    e.idJid,
                    a,
                  )
                : null,
            l = yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.loadNewsletterPreviewChat({
              newsletter: n,
              metadata: r,
              pic: i,
            });
          if (l != null) {
            var s,
              u,
              c = e.newsletterStatusMetadata;
            o(
              "WAWebNewsletterSyntheticStatusUtils",
            ).maybeCreateOrCleanupSynthetic(
              l.id,
              (s = c == null ? void 0 : c.lastStatusServerId) != null
                ? s
                : null,
              (u = c == null ? void 0 : c.lastStatusSentTime) != null
                ? u
                : null,
              e.idJid,
            );
          }
          return l;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(
              o(
                "WAWebNewsletterModelUtils",
              ).convertDirectoryNewsletterMetadataToNewsletterMetadata(t),
            );
          ((n = e.newsletterMetadata) == null || n.set(r, { merge: !0 }),
            yield f(t));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = e.newsletterPictureMetadataMixin) == null
                ? void 0
                : t.picture;
          if (n != null) {
            var r = o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
              e.idJid,
              n,
            );
            yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.updateNewsletterPicture({ pic: r });
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.getDirectoryNewsletterChats = u;
  },
  98,
);
