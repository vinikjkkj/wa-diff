__d(
  "Auto2CreativeIdentityUtils",
  [
    "Auto2CreativeIdentityUtilsDefaultIGForPageQuery.graphql",
    "Auto2CreativeIdentityUtilsIGAccountsQuery.graphql",
    "Auto2CreativeIdentityUtilsPagesQuery.graphql",
    "CurrentUserInitialData",
    "GeoBaseSearchableSelectorItem.react",
    "PaginationSearchSource",
    "RelayHooks",
    "SearchableEntry",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState,
      g =
        e !== void 0
          ? e
          : (e = n("Auto2CreativeIdentityUtilsPagesQuery.graphql")),
      h =
        s !== void 0
          ? s
          : (s = n("Auto2CreativeIdentityUtilsIGAccountsQuery.graphql")),
      y =
        u !== void 0
          ? u
          : (u = n("Auto2CreativeIdentityUtilsDefaultIGForPageQuery.graphql"));
    function C(e, t) {
      var n;
      t === void 0 && (t = !1);
      var o = e.username;
      return e.instagram_actor_id == null || o == null
        ? null
        : new (r("SearchableEntry"))({
            auxiliaryData: {
              instagramActorId: String(e.instagram_actor_id),
              profilePictureUrl: t
                ? null
                : (n = e.profile_picture_url) != null
                  ? n
                  : null,
            },
            order: 0,
            title: o,
            uniqueID: String(e.instagram_actor_id),
          });
    }
    async function b(e, t) {
      var n,
        r = await o("RelayHooks")
          .fetchQuery(e, y, { pageIds: [t] })
          .toPromise(),
        a = (n = r == null ? void 0 : r.pages) != null ? n : [],
        i = a[0];
      for (var l of (s =
        i == null || (u = i.page_instagram_users_v2) == null
          ? void 0
          : u.nodes) != null
        ? s
        : []) {
        var s,
          u,
          c = C(l);
        if (c != null) return c;
      }
      for (var d of (m =
        i == null || (p = i.page_backed_instagram_users_v2) == null
          ? void 0
          : p.nodes) != null
        ? m
        : []) {
        var m,
          p,
          _ = C(d, !0);
        if (_ != null) return _;
      }
      return null;
    }
    function v(e) {
      var t,
        n = (t = e.getAuxiliaryData()) == null ? void 0 : t.profilePictureUri;
      return m.jsx(r("GeoBaseSearchableSelectorItem.react"), {
        label: e.getTitle(),
        media:
          n != null
            ? m.jsx("img", {
                alt: e.getTitle(),
                src: n,
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x10w6t97 xl1xv1r x1td3qas",
              })
            : void 0,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t,
        n,
        o,
        a = (t = e.getAuxiliaryData()) == null ? void 0 : t.profilePictureUrl;
      return m.jsx(r("GeoBaseSearchableSelectorItem.react"), {
        description: String(
          (n =
            (o = e.getAuxiliaryData()) == null ? void 0 : o.instagramActorId) !=
            null
            ? n
            : "",
        ),
        label: "@" + e.getTitle(),
        media:
          a != null
            ? m.jsx("img", {
                alt: e.getTitle(),
                src: a,
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x10w6t97 xl1xv1r x1td3qas",
              })
            : void 0,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t,
        n =
          e.has_create_ads_access === !0 ||
          e.has_transitioned_to_new_page_experience === !0 ||
          ((t = e.permitted_tasks) != null ? t : []).includes("ADVERTISE");
      return !(
        !n ||
        e.is_published === !1 ||
        e.is_page_ale_ban_hammered === !0
      );
    }
    function L() {
      var e = o("RelayHooks").useRelayEnvironment(),
        t = String((c || (c = r("CurrentUserInitialData"))).USER_ID);
      return new (r("PaginationSearchSource"))(async function (n) {
        var a,
          i,
          l = await o("RelayHooks")
            .fetchQuery(e, g, {
              filter: n !== "" ? n : null,
              limit: 50,
              userId: t,
            })
            .toPromise(),
          s =
            (a =
              l == null ||
              (i = l.user) == null ||
              (i = i.facebook_pages) == null
                ? void 0
                : i.nodes) != null
              ? a
              : [],
          u = [],
          c = 0;
        for (var d of s) {
          var m,
            p,
            _ = d.id,
            f = d.name;
          _ == null ||
            f == null ||
            (R(d) &&
              u.push(
                new (r("SearchableEntry"))({
                  auxiliaryData: {
                    pageId: _,
                    profilePictureUri:
                      (m = (p = d.profile_picture) == null ? void 0 : p.uri) !=
                      null
                        ? m
                        : null,
                  },
                  order: c++,
                  title: f,
                  uniqueID: _,
                }),
              ));
        }
        return u;
      });
    }
    function E(e) {
      var t = o("RelayHooks").useRelayEnvironment();
      return new (r("PaginationSearchSource"))(async function (n) {
        var a;
        if (e == null) {
          var i = [];
          return i;
        }
        var l = await o("RelayHooks")
            .fetchQuery(t, h, { pageIds: [e] })
            .toPromise(),
          s = (a = l == null ? void 0 : l.pages) != null ? a : [],
          u = [],
          c = 0;
        for (var d of s) {
          var m,
            p,
            _ =
              (m =
                d == null || (p = d.page_instagram_users_v2) == null
                  ? void 0
                  : p.nodes) != null
                ? m
                : [];
          for (var f of _) {
            var g,
              y = f.username;
            f.instagram_actor_id == null ||
              y == null ||
              (n !== "" && !y.toLowerCase().includes(n.toLowerCase())) ||
              u.push(
                new (r("SearchableEntry"))({
                  auxiliaryData: {
                    instagramActorId: String(f.instagram_actor_id),
                    profilePictureUrl:
                      (g = f.profile_picture_url) != null ? g : null,
                  },
                  order: c++,
                  title: y,
                  uniqueID: String(f.instagram_actor_id),
                }),
              );
          }
        }
        return u;
      });
    }
    function k(e) {
      var t = o("RelayHooks").useRelayEnvironment(),
        n = String((c || (c = r("CurrentUserInitialData"))).USER_ID),
        a = f(null),
        i = a[0],
        l = a[1];
      return (
        _(
          function () {
            if (e == null) {
              l(null);
              return;
            }
            var a = !1;
            return (
              (async function (i, s) {
                var u = await o("RelayHooks")
                  .fetchQuery(t, g, { filter: e, limit: 10, userId: n })
                  .toPromise();
                if (!a) {
                  var c =
                    (i =
                      u == null ||
                      (s = u.user) == null ||
                      (s = s.facebook_pages) == null
                        ? void 0
                        : s.nodes) != null
                      ? i
                      : [];
                  for (var d of c) {
                    var m = d.name;
                    if (d.id === e && m != null && R(d)) {
                      var p, _;
                      l(
                        new (r("SearchableEntry"))({
                          auxiliaryData: {
                            pageId: e,
                            profilePictureUri:
                              (p =
                                (_ = d.profile_picture) == null
                                  ? void 0
                                  : _.uri) != null
                                ? p
                                : null,
                          },
                          order: 0,
                          title: m,
                          uniqueID: e,
                        }),
                      );
                      return;
                    }
                  }
                  l(null);
                }
              })(),
              function () {
                a = !0;
              }
            );
          },
          [e, t, n],
        ),
        i
      );
    }
    function I(e, t) {
      var n = o("RelayHooks").useRelayEnvironment(),
        a = f(null),
        i = a[0],
        l = a[1];
      return (
        _(
          function () {
            if (e == null || t == null) {
              l(null);
              return;
            }
            var a = !1;
            return (
              (async function (i, s) {
                var u = await o("RelayHooks")
                  .fetchQuery(n, h, { pageIds: [e] })
                  .toPromise();
                if (!a) {
                  var c = (i = u == null ? void 0 : u.pages) != null ? i : [];
                  for (var d of c) {
                    var m,
                      p,
                      _ =
                        (m =
                          d == null || (p = d.page_instagram_users_v2) == null
                            ? void 0
                            : p.nodes) != null
                          ? m
                          : [];
                    for (var f of _) {
                      var g = f.username;
                      if (
                        f.instagram_actor_id != null &&
                        String(f.instagram_actor_id) === t &&
                        g != null
                      ) {
                        var b;
                        l(
                          new (r("SearchableEntry"))({
                            auxiliaryData: {
                              instagramActorId: String(f.instagram_actor_id),
                              profilePictureUrl:
                                (b = f.profile_picture_url) != null ? b : null,
                            },
                            order: 0,
                            title: g,
                            uniqueID: String(f.instagram_actor_id),
                          }),
                        );
                        return;
                      }
                    }
                  }
                  var v = await o("RelayHooks")
                    .fetchQuery(n, y, { pageIds: [e] })
                    .toPromise();
                  if (!a) {
                    var S = (s = v == null ? void 0 : v.pages) != null ? s : [];
                    for (var R of S) {
                      var L,
                        E,
                        k =
                          (L =
                            R == null ||
                            (E = R.page_backed_instagram_users_v2) == null
                              ? void 0
                              : E.nodes) != null
                            ? L
                            : [];
                      for (var I of k)
                        if (
                          (I == null ? void 0 : I.instagram_actor_id) != null &&
                          String(I.instagram_actor_id) === t
                        ) {
                          var T = C(I, !0);
                          if (T != null) {
                            l(T);
                            return;
                          }
                        }
                    }
                    l(null);
                  }
                }
              })(),
              function () {
                a = !0;
              }
            );
          },
          [e, t, n],
        ),
        i
      );
    }
    ((l.genDefaultIGEntryForPage = b),
      (l.renderPageEntry = v),
      (l.renderIGEntry = S),
      (l.usePageSearchSource = L),
      (l.useIGSearchSource = E),
      (l.usePageEntryById = k),
      (l.useIGEntryByActorId = I));
  },
  98,
);
