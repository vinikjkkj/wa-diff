__d(
  "WAWebContactProfilePicThumbBridge",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChangeProfilePicThumb",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchNewsletterProfilePic",
    "WAWebProfilePicConstants",
    "WAWebSendProfilePictureJob",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("requireDeferred")("WAWebFetchCommunityProfilePic").__setRef(
        "WAWebContactProfilePicThumbBridge",
      ),
      h = r("requireDeferred")("WAWebGetProfilePicJob").__setRef(
        "WAWebContactProfilePicThumbBridge",
      );
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("WAWebSendProfilePictureJob")(e, null).then(function () {
              return { status: 200 };
            }),
            n = yield t;
          return (
            o("WAWebChangeProfilePicThumb")
              .changeProfilePicThumb(
                e,
                o("WAWebProfilePicConstants").ProfilePicCommand.Remove,
              )
              .catch(function (e) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "changeProfilePicThumb failed with error ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                );
              }),
            n
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = r("WAWebURLUtils").parseDataURL(a).data,
            l = o("WABase64").decodeB64(i),
            s = r("WAWebSendProfilePictureJob")(e, l).then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield h.load(),
                  n = t.getProfilePic,
                  r = yield n(e, { preview: !1 });
                return {
                  tag: r.tag,
                  eurl: r.eurl,
                  fullDirectPath: r.directPath,
                  filehash: r.filehash,
                  status: 200,
                };
              }),
            ),
            c = yield s;
          return (
            o("WAWebChangeProfilePicThumb")
              .changeProfilePicThumb(
                e,
                o("WAWebProfilePicConstants").ProfilePicCommand.Set,
              )
              .catch(function (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "changeProfilePicThumb failed with error ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                );
              }),
            c
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = S(e, t);
          yield o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(n);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = h
            .load()
            .then(function (r) {
              var o = r.getProfilePic;
              return (f || (f = n("Promise"))).all([
                o(e, babelHelpers.extends({}, t, { preview: !1 })),
                o(e, babelHelpers.extends({}, t, { preview: !0 })),
              ]);
            })
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
            (R(e, i).catch(function (e) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "persistProfilePicToDB failed with error ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }),
              D(e, i.eurl));
          } catch (t) {
            (D(e),
              I(e, r("getErrorSafe")(t)).catch(function (e) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[profilePicFind] persistProfilePicToDB failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                );
              }));
          }
          return a;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
            var n = t.status;
            n === 500 || n === 501 || n === 503
              ? o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "profilePicFind failed with serverCode: ",
                      "",
                    ])),
                  n,
                )
              : n === 404
                ? yield R(e)
                : n === 401 && !e.isGroup() && (yield R(e));
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      o("WAWebUserPrefsMeUser").isMeAccount(e) &&
        o("WAWebUserPrefsMultiDevice").setCachedProfilePicEURL(
          t != null ? t : "",
        );
    }
    function x(t) {
      return (f || (f = n("Promise"))).all(
        t.map(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  var n = yield E(t.id, {
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                R(a, u).catch(function (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
              var c = yield g.load(),
                d = c.fetchCommunityProfilePic,
                m = yield d(a, l);
              return (
                R(a, m).catch(function (e) {
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "persistProfilePicToDB failed with error ",
                        "",
                      ])),
                    r("getErrorSafe")(e).message,
                  );
                }),
                m
              );
            }
            var h = yield E(a, { tcToken: s, commonGid: t }),
              y = babelHelpers.extends({}, h, {
                id: a,
                timestamp: Date.now(),
                eurlStale: !1,
                stale: !1,
              });
            return y;
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              var C = { id: a };
              switch (e.status) {
                case 401:
                case 404:
                  ((C.tag = ""),
                    (C.timestamp = Date.now()),
                    (C.eurlStale = !1),
                    (C.stale = !1));
                  break;
                case 423:
                  C.stale = !0;
                  break;
                case 429:
                  C.stale = !0;
                  break;
                default:
                  C.eurlStale = !1;
                  break;
              }
              return (f || (f = n("Promise"))).resolve(C);
            }
            throw e;
          }
        })),
        P.apply(this, arguments)
      );
    }
    ((l.requestDeletePicture = y),
      (l.sendSetPicture = b),
      (l.mapProfilePictureToProfilePicThumbRowType = S),
      (l.persistProfilePicToDB = R),
      (l.profilePicResync = x),
      (l.requestProfilePicFromServer = $));
  },
  98,
);
