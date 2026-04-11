__d(
  "WAWebFetchCommunityProfilePic",
  ["Promise", "WAWebGroupGetProfilePicsJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i,
            l,
            s,
            u,
            c,
            d = { id: t },
            m = {
              groupId: t,
              photoId: a != null ? String(a) : null,
              isParentGroup: t.equals(r),
            },
            p = yield (e || (e = n("Promise"))).all([
              o("WAWebGroupGetProfilePicsJob").getProfilePics([m], r, {
                type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum
                  .IMAGE,
              }),
              o("WAWebGroupGetProfilePicsJob").getProfilePics([m], r, {
                type: o("WAWebGroupGetProfilePicsJob").ProfilePicsTypeEnum
                  .PREVIEW,
              }),
            ]),
            _ = p[0],
            f = p[1];
          return !f[0] || !f[0].updatePicture || !_[0] || !_[0].updatePicture
            ? d
            : babelHelpers.extends({}, d, {
                eurl: (i = _[0].eurl) != null ? i : void 0,
                fullDirectPath: (l = _[0].directPath) != null ? l : void 0,
                previewEurl: (s = f[0].eurl) != null ? s : void 0,
                previewDirectPath: (u = f[0].directPath) != null ? u : void 0,
                tag: (c = _[0].tag) != null ? c : void 0,
                timestamp: Date.now(),
                eurlStale: !1,
                stale: !1,
              });
        })),
        u.apply(this, arguments)
      );
    }
    l.fetchCommunityProfilePic = s;
  },
  98,
);
