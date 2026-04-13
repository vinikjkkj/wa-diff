__d(
  "WAWebBizRefreshedProfileDrawer.react",
  [
    "fbt",
    "Promise",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileEdit",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebEditBizProfileMutation",
    "WAWebModalManager",
    "WAWebODS",
    "WAWebProfileDrawerBody.react",
    "WAWebProfileDrawerHeader.react",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isEmptyObject",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        drawerWithMinWidth: {
          backgroundColor: "x6egj2d",
          minWidth: "x15icp18",
          overflowX: "x6ikm8r",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
      };
    function f(t) {
      var a = o("react-compiler-runtime").c(44),
        i = t.entryPoint,
        l = t.onClose,
        u,
        d,
        f;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
          (u = o("WAWebContactCollection").ContactCollection.assertGet(d)),
          (f = u.getStatus()),
          (a[0] = u),
          (a[1] = d),
          (a[2] = f))
        : ((u = a[0]), (d = a[1]), (f = a[2]));
      var C = f,
        b;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = ["status"]), (a[3] = b))
        : (b = a[3]);
      var v = o("useWAWebModelValues").useModelValues(C, b),
        S = v.status,
        R;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            var e,
              t,
              n,
              r,
              o,
              a,
              i,
              l,
              s,
              c,
              d,
              m,
              p,
              _,
              f,
              g =
                (e = u.businessProfile) == null || (e = e.serviceAreas) == null
                  ? void 0
                  : e[0];
            return {
              businessName: (t = u.pushname) != null ? t : "",
              description:
                (n =
                  (r = u.businessProfile) == null ? void 0 : r.description) !=
                null
                  ? n
                  : "",
              address:
                (o = (a = u.businessProfile) == null ? void 0 : a.address) !=
                null
                  ? o
                  : "",
              serviceAreaRadius:
                (g == null ? void 0 : g.radius) != null ? String(g.radius) : "",
              locationNotes:
                (i = g == null ? void 0 : g.areaDescription) != null ? i : "",
              primaryWebsite:
                (l =
                  (s = u.businessProfile) == null ||
                  (s = s.website) == null ||
                  (s = s[0]) == null
                    ? void 0
                    : s.url) != null
                  ? l
                  : "",
              secondaryWebsite:
                (c =
                  (d = u.businessProfile) == null ||
                  (d = d.website) == null ||
                  (d = d[1]) == null
                    ? void 0
                    : d.url) != null
                  ? c
                  : "",
              email:
                (m = (p = u.businessProfile) == null ? void 0 : p.email) != null
                  ? m
                  : "",
              priceTier:
                (_ = (f = u.businessProfile) == null ? void 0 : f.priceTier) !=
                null
                  ? _
                  : "",
            };
          }),
          (a[4] = R))
        : (R = a[4]);
      var L = p(R),
        E = L[0],
        k = L[1],
        I = p(E),
        T = I[0],
        D = I[1],
        x = p(!1),
        $ = x[0],
        P = x[1],
        N = p(0),
        M = N[0],
        w = N[1],
        A = p(!0),
        F = A[0],
        O = A[1],
        B = p(null),
        W = B[0],
        q = B[1],
        U;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function (t) {
            q(t);
          }),
          (a[5] = U))
        : (U = a[5]);
      var V = U,
        H;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebBusinessProfileEdit").editBusinessProfile(
                    e,
                  ),
                  n = o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.get(d);
                return (
                  n && n.markStale(),
                  yield o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.find(d),
                  w(y),
                  t
                );
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[6] = H))
        : (H = a[6]);
      var G = H,
        z =
          E.description !== T.description ||
          E.address !== T.address ||
          E.serviceAreaRadius !== T.serviceAreaRadius ||
          E.locationNotes !== T.locationNotes ||
          E.primaryWebsite !== T.primaryWebsite ||
          E.secondaryWebsite !== T.secondaryWebsite ||
          E.email !== T.email ||
          E.priceTier !== T.priceTier ||
          W != null,
        j;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function (t, n) {
            D(function (e) {
              var r;
              return babelHelpers.extends({}, e, ((r = {}), (r[t] = n), r));
            });
          }),
          (a[7] = j))
        : (j = a[7]);
      var K = j,
        Q;
      a[8] !== T || a[9] !== z || a[10] !== E || a[11] !== W
        ? ((Q = function () {
            if (z) {
              (o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.logProfileFieldsSave(E, T),
                P(!0));
              var e = {};
              if (
                (E.description !== T.description &&
                  (e.description = T.description || null),
                E.email !== T.email && (e.email = T.email || null),
                E.address !== T.address && (e.address = T.address || null),
                E.priceTier !== T.priceTier)
              ) {
                var t = T.priceTier;
                e.price_tier =
                  t === "BUDGET"
                    ? "BUDGET"
                    : t === "EVERYDAY"
                      ? "EVERYDAY"
                      : t === "LUXURY"
                        ? "LUXURY"
                        : t === "PREMIUM"
                          ? "PREMIUM"
                          : null;
              }
              W != null &&
                ((e.latitude = W.latitude), (e.longitude = W.longitude));
              var n =
                E.primaryWebsite !== T.primaryWebsite ||
                E.secondaryWebsite !== T.secondaryWebsite;
              if (n) {
                var r = [];
                (T.primaryWebsite && r.push(T.primaryWebsite),
                  T.secondaryWebsite && r.push(T.secondaryWebsite),
                  (e.websites = r));
              }
              var a = E.serviceAreaRadius !== T.serviceAreaRadius,
                i = E.locationNotes !== T.locationNotes;
              if (a || i) {
                var l,
                  s,
                  c,
                  m,
                  p,
                  _,
                  f = Number(T.serviceAreaRadius) || 0,
                  g =
                    (l =
                      (s = W == null ? void 0 : W.latitude) != null
                        ? s
                        : (c = u.businessProfile) == null
                          ? void 0
                          : c.latitude) != null
                      ? l
                      : 0,
                  h =
                    (m =
                      (p = W == null ? void 0 : W.longitude) != null
                        ? p
                        : (_ = u.businessProfile) == null
                          ? void 0
                          : _.longitude) != null
                      ? m
                      : 0;
                e.service_areas = [
                  {
                    radius_meters: f,
                    center_latitude: g,
                    center_longitude: h,
                    description: T.locationNotes,
                  },
                ];
              }
              var y = d.toString();
              o("WAWebEditBizProfileMutation")
                .editBizProfile(y, e)
                .then(function () {
                  (k(T), q(null), P(!1));
                })
                .catch(function (e) {
                  throw (P(!1), e);
                });
            }
          }),
          (a[8] = T),
          (a[9] = z),
          (a[10] = E),
          (a[11] = W),
          (a[12] = Q))
        : (Q = a[12]);
      var X = Q,
        Y;
      a[13] !== T || a[14] !== z || a[15] !== E || a[16] !== W
        ? ((Y = function () {
            if (z) {
              (o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.logProfileFieldsSave(E, T),
                P(!0));
              var t = {};
              if (
                (E.address !== T.address && (t.address = T.address || null),
                E.description !== T.description)
              ) {
                var a,
                  i = (a = T.description) == null ? void 0 : a.trim();
                t.description = i || null;
              }
              (E.email !== T.email && (t.email = T.email || null),
                E.priceTier !== T.priceTier &&
                  (t.priceTier = T.priceTier || null),
                W != null &&
                  ((t.latitude = W.latitude), (t.longitude = W.longitude)));
              var l = E.serviceAreaRadius !== T.serviceAreaRadius,
                s = E.locationNotes !== T.locationNotes;
              if (l || s) {
                var c,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g = Number(T.serviceAreaRadius) || 0,
                  h =
                    (c =
                      (d = W == null ? void 0 : W.latitude) != null
                        ? d
                        : (m = u.businessProfile) == null
                          ? void 0
                          : m.latitude) != null
                      ? c
                      : 0,
                  y =
                    (p =
                      (_ = W == null ? void 0 : W.longitude) != null
                        ? _
                        : (f = u.businessProfile) == null
                          ? void 0
                          : f.longitude) != null
                      ? p
                      : 0;
                t.serviceAreas = [
                  {
                    radius: g,
                    latitude: h,
                    longitude: y,
                    areaDescription: T.locationNotes,
                  },
                ];
              }
              var C =
                E.primaryWebsite !== T.primaryWebsite ||
                E.secondaryWebsite !== T.secondaryWebsite;
              if (C) {
                var b = [];
                (T.primaryWebsite && b.push({ url: T.primaryWebsite }),
                  T.secondaryWebsite && b.push({ url: T.secondaryWebsite }),
                  (t.website = b));
              }
              var v = r("isEmptyObject")(t)
                ? (e || (e = n("Promise"))).resolve()
                : o("WAWebBusinessProfileEdit").editBusinessProfile(t);
              v.then(function () {
                (k(T), q(null), P(!1));
              }).catch(function (e) {
                throw (P(!1), e);
              });
            }
          }),
          (a[13] = T),
          (a[14] = z),
          (a[15] = E),
          (a[16] = W),
          (a[17] = Y))
        : (Y = a[17]);
      var J = Y,
        Z;
      a[18] !== J || a[19] !== X
        ? ((Z = function () {
            (d.isLid() ||
              r("WAWebODS").incr("web.biz_profile.edit_profile.non_lid"),
              o("WAWebBizGatingUtils").bizProfileGraphQLMigrationEnabled() &&
              d.isLid()
                ? X()
                : J());
          }),
          (a[18] = J),
          (a[19] = X),
          (a[20] = Z))
        : (Z = a[20]);
      var ee = Z,
        te;
      a[21] !== ee || a[22] !== z || a[23] !== l || a[24] !== E
        ? ((te = function () {
            if (!z) {
              l();
              return;
            }
            var e = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: c.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Save changes?"),
              }),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onCancel: o("WAWebModalManager").closeModalManager,
            });
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: e,
                okText: s._(/*BTDS*/ "Save"),
                cancelText: s._(/*BTDS*/ "Discard changes"),
                onOK: function () {
                  (o("WAWebModalManager").ModalManager.close(), ee());
                },
                onCancel: function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    D(E),
                    q(null),
                    w(h));
                },
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "biz-profile-discard",
                },
                children: c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  children: s._(
                    /*BTDS*/ "You are navigating away from this page. Would you like to save your changes?",
                  ),
                }),
              }),
            );
          }),
          (a[21] = ee),
          (a[22] = z),
          (a[23] = l),
          (a[24] = E),
          (a[25] = te))
        : (te = a[25]);
      var ne = te,
        re,
        oe;
      (a[26] !== i
        ? ((re = function () {
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.viewProfile(i);
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              t = o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.get(e);
            t && (t.markStale(), w(g));
          }),
          (oe = [i]),
          (a[26] = i),
          (a[27] = re),
          (a[28] = oe))
        : ((re = a[27]), (oe = a[28])),
        m(re, oe));
      var ae;
      a[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = { surface: "unknown", viewName: "biz-refreshed-profile" }),
          (a[29] = ae))
        : (ae = a[29]);
      var ie = !F,
        le;
      a[30] !== ne || a[31] !== ee || a[32] !== z || a[33] !== $ || a[34] !== ie
        ? ((le = c.jsx(r("WAWebProfileDrawerHeader.react"), {
            onClose: ne,
            onSave: ee,
            hasChanges: z,
            isSaving: $,
            saveDisabled: ie,
          })),
          (a[30] = ne),
          (a[31] = ee),
          (a[32] = z),
          (a[33] = $),
          (a[34] = ie),
          (a[35] = le))
        : (le = a[35]);
      var se = S != null ? S : "",
        ue;
      a[36] !== T || a[37] !== M || a[38] !== W || a[39] !== se
        ? ((ue = c.jsx(
            r("WAWebProfileDrawerBody.react"),
            {
              about: se,
              onFieldChange: K,
              onLocationSelect: V,
              bizProfileValues: T,
              onSave: G,
              onValidationChange: O,
              selectedLocation: W,
            },
            M,
          )),
          (a[36] = T),
          (a[37] = M),
          (a[38] = W),
          (a[39] = se),
          (a[40] = ue))
        : (ue = a[40]);
      var ce;
      return (
        a[41] !== le || a[42] !== ue
          ? ((ce = c.jsxs(r("WAWebDrawer.react"), {
              testid: void 0,
              xstyle: _.drawerWithMinWidth,
              tsNavigationData: ae,
              children: [le, ue],
            })),
            (a[41] = le),
            (a[42] = ue),
            (a[43] = ce))
          : (ce = a[43]),
        ce
      );
    }
    function g(e) {
      return e + 1;
    }
    function h(e) {
      return e + 1;
    }
    function y(e) {
      return e + 1;
    }
    l.default = f;
  },
  226,
);
