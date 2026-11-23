__d(
  "WAWebContactProfilePicThumbBridge",
  [
    "WABase64",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChangeProfilePicThumb",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchNewsletterProfilePic",
    "WAWebProfilePicConstants",
    "WAWebSendProfilePictureJob",
    "WAWebURLUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebWidFactory",
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
      f = r("requireDeferred")("WAWebFetchCommunityProfilePic").__setRef(
        "WAWebContactProfilePicThumbBridge",
      ),
      g = r("requireDeferred")("WAWebGetProfilePicJob").__setRef(
        "WAWebContactProfilePicThumbBridge",
      );
    async function h(t) {
      var n = r("WAWebSendProfilePictureJob")(t, null).then(function () {
          return { status: 200 };
        }),
        a = await n;
      return (
        o("WAWebChangeProfilePicThumb")
          .changeProfilePicThumb(
            t,
            o("WAWebProfilePicConstants").ProfilePicCommand.Remove,
          )
          .catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "changeProfilePicThumb failed with error ",
                  "",
                ])),
              r("getErrorSafe")(t).message,
            );
          }),
        a
      );
    }
    async function y(e, t, n) {
      var a = r("WAWebURLUtils").parseDataURL(n).data,
        i = o("WABase64").decodeB64(a),
        l = r("WAWebSendProfilePictureJob")(e, i).then(async function () {
          var t = await g.load(),
            n = t.getProfilePic,
            r = await n(e, { preview: !1 });
          return {
            tag: r.tag,
            eurl: r.eurl,
            fullDirectPath: r.directPath,
            filehash: r.filehash,
            status: 200,
          };
        }),
        u = await l;
      return (
        o("WAWebChangeProfilePicThumb")
          .changeProfilePicThumb(
            e,
            o("WAWebProfilePicConstants").ProfilePicCommand.Set,
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
        u
      );
    }
    function C(e, t) {
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
    async function b(e, t) {
      var n = C(e, t);
      await o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(n);
    }
    async function v(e, t) {
      var n = g
        .load()
        .then(function (n) {
          var r = n.getProfilePic;
          return Promise.all([
            r(e, babelHelpers.extends({}, t, { preview: !1 })),
            r(e, babelHelpers.extends({}, t, { preview: !0 })),
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
        var a = await n;
        (b(e, a).catch(function (e) {
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "persistProfilePicToDB failed with error ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          );
        }),
          R(e, a.eurl));
      } catch (t) {
        (R(e),
          S(e, r("getErrorSafe")(t)).catch(function (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[profilePicFind] persistProfilePicToDB failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            );
          }));
      }
      return n;
    }
    async function S(e, t) {
      if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
        var n = t.status;
        n === 500 || n === 501 || n === 503
          ? o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "profilePicFind failed with serverCode: ",
                  "",
                ])),
              n,
            )
          : n === 404
            ? await b(e)
            : n === 401 && !e.isGroup() && (await b(e));
      }
    }
    function R(e, t) {
      o("WAWebUserUtils").isMeAccount(e) &&
        o("WAWebUserPrefsMultiDevice").setCachedProfilePicEURL(
          t != null ? t : "",
        );
    }
    function L(e) {
      return Promise.all(
        e.map(async function (e) {
          try {
            var t = await v(e.id, {
              tcToken: e.tcToken,
              commonGid: e.commonGid,
            });
            return {
              id: e.id,
              eurl: t.eurl,
              tag: t.tag,
              previewEurl: t.previewEurl,
              previewDirectPath: t.previewDirectPath,
              fullDirectPath: t.fullDirectPath,
              filehash: t.filehash,
              stale: !1,
              eurlStale: !1,
              timestamp: Date.now(),
            };
          } catch (t) {
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError)
              switch (t.status) {
                case 401:
                case 404:
                  return {
                    tag: "",
                    id: e.id,
                    stale: !1,
                    eurlStale: !1,
                    timestamp: Date.now(),
                  };
                default:
                  return (
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "ProfilePicThumb:resyncPictures error - ",
                          ", ",
                          "",
                        ])),
                      t.status,
                      t.message,
                    ),
                    {
                      id: e.id,
                      stale: !1,
                      eurlStale: !1,
                      timestamp: Date.now(),
                    }
                  );
              }
            throw t;
          }
        }),
      );
    }
    async function E(e) {
      var t = e.commonGid,
        n = e.id,
        a = e.newsletterRole,
        i = e.parentGroupId,
        l = e.tcToken;
      try {
        if (n.isNewsletter()) {
          var s = await o(
            "WAWebFetchNewsletterProfilePic",
          ).fetchNewsletterProfilePic(
            o("WAWebWidFactory").asNewsletterWidOrThrow(n),
            a,
          );
          return (
            b(n, s).catch(function (e) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "persistProfilePicToDB failed with error ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }),
            s
          );
        }
        if (i != null) {
          var u = await f.load(),
            c = u.fetchCommunityProfilePic,
            d = await c(n, i);
          return (
            b(n, d).catch(function (e) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "persistProfilePicToDB failed with error ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }),
            d
          );
        }
        var m = await v(n, { tcToken: l, commonGid: t }),
          g = babelHelpers.extends({}, m, {
            id: n,
            timestamp: Date.now(),
            eurlStale: !1,
            stale: !1,
          });
        return g;
      } catch (e) {
        if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
          var h = { id: n };
          switch (e.status) {
            case 401:
            case 404:
              ((h.tag = ""),
                (h.timestamp = Date.now()),
                (h.eurlStale = !1),
                (h.stale = !1));
              break;
            case 423:
              h.stale = !0;
              break;
            case 429:
              h.stale = !0;
              break;
            default:
              h.eurlStale = !1;
              break;
          }
          return Promise.resolve(h);
        }
        throw e;
      }
    }
    ((l.requestDeletePicture = h),
      (l.sendSetPicture = y),
      (l.mapProfilePictureToProfilePicThumbRowType = C),
      (l.persistProfilePicToDB = b),
      (l.profilePicResync = L),
      (l.requestProfilePicFromServer = E));
  },
  98,
);
