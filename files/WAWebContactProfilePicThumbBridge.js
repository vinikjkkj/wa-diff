__d(
  "WAWebContactProfilePicThumbBridge",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChangeProfilePicThumb",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchCommunityProfilePic",
    "WAWebFetchNewsletterProfilePic",
    "WAWebGetProfilePicJob",
    "WAWebProfilePicConstants",
    "WAWebSendProfilePictureJob",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("WAWebSendProfilePictureJob")(e, null).then(function () {
              return { status: 200 };
            }),
            n = yield t;
          return (
            o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
              e,
              o("WAWebProfilePicConstants").ProfilePicCommand.Remove,
            ),
            n
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = r("WAWebURLUtils").parseDataURL(a).data,
            l = o("WABase64").decodeB64(i),
            s = r("WAWebSendProfilePictureJob")(e, l).then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o("WAWebGetProfilePicJob").getProfilePic(e, {
                  preview: !1,
                });
                return {
                  tag: t.tag,
                  eurl: t.eurl,
                  fullDirectPath: t.directPath,
                  filehash: t.filehash,
                  status: 200,
                };
              }),
            ),
            u = yield s;
          return (
            o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
              e,
              o("WAWebProfilePicConstants").ProfilePicCommand.Set,
            ),
            u
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n, r, o, a, i, l;
      return {
        id: e.toString(),
        eurl: (n = t == null ? void 0 : t.eurl) != null ? n : null,
        previewEurl:
          (r = t == null ? void 0 : t.previewEurl) != null ? r : null,
        tag: (o = t == null ? void 0 : t.tag) != null ? o : null,
        previewDirectPath:
          (a = t == null ? void 0 : t.previewDirectPath) != null ? a : null,
        fullDirectPath:
          (i = t == null ? void 0 : t.fullDirectPath) != null ? i : null,
        filehash: (l = t == null ? void 0 : t.filehash) != null ? l : null,
        timestamp: Date.now(),
      };
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = y(e, t);
          yield o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(n);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = (p || (p = n("Promise")))
            .all([
              o("WAWebGetProfilePicJob").getProfilePic(
                e,
                babelHelpers.extends({}, t, { preview: !1 }),
              ),
              o("WAWebGetProfilePicJob").getProfilePic(
                e,
                babelHelpers.extends({}, t, { preview: !0 }),
              ),
            ])
            .then(function (e) {
              var t,
                n = e[0],
                r = e[1],
                o = {
                  eurl: n.eurl,
                  tag: n.tag,
                  previewEurl: r.eurl,
                  previewDirectPath: r.directPath,
                  fullDirectPath: n.directPath,
                },
                a = (t = r.filehash) != null ? t : n.filehash;
              return (a != null && (o.filehash = a), o);
            });
          try {
            var i = yield a;
            (C(e, i).catch(function (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "persistProfilePicToDB failed with error ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }),
              E(e, i.eurl));
          } catch (t) {
            (E(e),
              R(e, r("getErrorSafe")(t)).catch(function (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[profilePicFind] persistProfilePicToDB failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                );
              }));
          }
          return a;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
            var n = t.status;
            n === 500 || n === 501 || n === 503
              ? o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "profilePicFind failed with serverCode: ",
                      "",
                    ])),
                  n,
                )
              : n === 404
                ? yield C(e)
                : n === 401 && !e.isGroup() && (yield C(e));
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      e.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser()) &&
        o("WAWebUserPrefsMultiDevice").setCachedProfilePicEURL(
          t != null ? t : "",
        );
    }
    function k(t) {
      return (p || (p = n("Promise"))).all(
        t.map(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  var n = yield v(t.id, {
                    tcToken: t.tcToken,
                    commonGid: t.commonGid,
                  });
                  return {
                    id: t.id,
                    eurl: n.eurl,
                    tag: n.tag,
                    previewEurl: n.previewEurl,
                    previewDirectPath: n.previewDirectPath,
                    fullDirectPath: n.fullDirectPath,
                    filehash: n.filehash,
                    stale: !1,
                    eurlStale: !1,
                    timestamp: Date.now(),
                  };
                } catch (n) {
                  if (
                    n instanceof o("WAWebBackendErrors").ServerStatusCodeError
                  )
                    switch (n.status) {
                      case 401:
                      case 404:
                        return {
                          tag: "",
                          id: t.id,
                          stale: !1,
                          eurlStale: !1,
                          timestamp: Date.now(),
                        };
                      default:
                        return (
                          o("WALogger").WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "ProfilePicThumb:resyncPictures error - ",
                                ", ",
                                "",
                              ])),
                            n.status,
                            n.message,
                          ),
                          {
                            id: t.id,
                            stale: !1,
                            eurlStale: !1,
                            timestamp: Date.now(),
                          }
                        );
                    }
                  throw n;
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        ),
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.commonGid,
            a = e.id,
            i = e.newsletterRole,
            l = e.parentGroupId,
            s = e.tcToken;
          try {
            if (a.isNewsletter()) {
              var u = yield o(
                "WAWebFetchNewsletterProfilePic",
              ).fetchNewsletterProfilePic(
                o("WAWebWidFactory").asNewsletterWidOrThrow(a),
                i,
              );
              return (
                C(a, u).catch(function (e) {
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "persistProfilePicToDB failed with error ",
                        "",
                      ])),
                    r("getErrorSafe")(e).message,
                  );
                }),
                u
              );
            }
            if (l != null) {
              var c = yield o(
                "WAWebFetchCommunityProfilePic",
              ).fetchCommunityProfilePic(a, l);
              return (
                C(a, c).catch(function (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "persistProfilePicToDB failed with error ",
                        "",
                      ])),
                    r("getErrorSafe")(e).message,
                  );
                }),
                c
              );
            }
            var _ = yield v(a, { tcToken: s, commonGid: t }),
              f = babelHelpers.extends({}, _, {
                id: a,
                timestamp: Date.now(),
                eurlStale: !1,
                stale: !1,
              });
            return f;
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              var g = { id: a };
              switch (e.status) {
                case 401:
                case 404:
                  ((g.tag = ""),
                    (g.timestamp = Date.now()),
                    (g.eurlStale = !1),
                    (g.stale = !1));
                  break;
                case 423:
                  g.stale = !0;
                  break;
                case 429:
                  g.stale = !0;
                  break;
                default:
                  g.eurlStale = !1;
                  break;
              }
              return (p || (p = n("Promise"))).resolve(g);
            }
            throw e;
          }
        })),
        T.apply(this, arguments)
      );
    }
    ((l.requestDeletePicture = _),
      (l.sendSetPicture = g),
      (l.mapProfilePictureToProfilePicThumbRowType = y),
      (l.persistProfilePicToDB = C),
      (l.profilePicResync = k),
      (l.requestProfilePicFromServer = I));
  },
  98,
);
