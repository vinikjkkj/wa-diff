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
      var a = t.entryPoint,
        i = t.onClose,
        l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u = o("WAWebContactCollection").ContactCollection.assertGet(l),
        d = u.getStatus(),
        f = o("useWAWebModelValues").useModelValues(d, ["status"]),
        g = f.status,
        h = p(function () {
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
              (n = (r = u.businessProfile) == null ? void 0 : r.description) !=
              null
                ? n
                : "",
            address:
              (o = (a = u.businessProfile) == null ? void 0 : a.address) != null
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
        y = h[0],
        C = h[1],
        b = p(y),
        v = b[0],
        S = b[1],
        R = p(!1),
        L = R[0],
        E = R[1],
        k = p(0),
        I = k[0],
        T = k[1],
        D = p(!0),
        x = D[0],
        $ = D[1],
        P = p(null),
        N = P[0],
        M = P[1],
        w = function (t) {
          M(t);
        },
        A = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebBusinessProfileEdit").editBusinessProfile(e),
              n = o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.get(l);
            return (
              n && n.markStale(),
              yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(l),
              T(function (e) {
                return e + 1;
              }),
              t
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        F =
          y.description !== v.description ||
          y.address !== v.address ||
          y.serviceAreaRadius !== v.serviceAreaRadius ||
          y.locationNotes !== v.locationNotes ||
          y.primaryWebsite !== v.primaryWebsite ||
          y.secondaryWebsite !== v.secondaryWebsite ||
          y.email !== v.email ||
          y.priceTier !== v.priceTier ||
          N != null,
        O = function (t, n) {
          S(function (e) {
            var r;
            return babelHelpers.extends({}, e, ((r = {}), (r[t] = n), r));
          });
        },
        B = function () {
          if (F) {
            (o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.logProfileFieldsSave(y, v),
              E(!0));
            var e = {};
            if (
              (y.description !== v.description &&
                (e.description = v.description || null),
              y.email !== v.email && (e.email = v.email || null),
              y.address !== v.address && (e.address = v.address || null),
              y.priceTier !== v.priceTier)
            ) {
              var t = v.priceTier;
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
            N != null &&
              ((e.latitude = N.latitude), (e.longitude = N.longitude));
            var n =
              y.primaryWebsite !== v.primaryWebsite ||
              y.secondaryWebsite !== v.secondaryWebsite;
            if (n) {
              var r = [];
              (v.primaryWebsite && r.push(v.primaryWebsite),
                v.secondaryWebsite && r.push(v.secondaryWebsite),
                (e.websites = r));
            }
            var a = y.serviceAreaRadius !== v.serviceAreaRadius,
              i = y.locationNotes !== v.locationNotes;
            if (a || i) {
              var s,
                c,
                d,
                m,
                p,
                _,
                f = Number(v.serviceAreaRadius) || 0,
                g =
                  (s =
                    (c = N == null ? void 0 : N.latitude) != null
                      ? c
                      : (d = u.businessProfile) == null
                        ? void 0
                        : d.latitude) != null
                    ? s
                    : 0,
                h =
                  (m =
                    (p = N == null ? void 0 : N.longitude) != null
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
                  description: v.locationNotes,
                },
              ];
            }
            var b = l.toString();
            o("WAWebEditBizProfileMutation")
              .editBizProfile(b, e)
              .then(function () {
                (C(v), M(null), E(!1));
              })
              .catch(function (e) {
                throw (E(!1), e);
              });
          }
        },
        W = function () {
          if (F) {
            (o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.logProfileFieldsSave(y, v),
              E(!0));
            var t = {};
            if (
              (y.address !== v.address && (t.address = v.address || null),
              y.description !== v.description)
            ) {
              var a,
                i = (a = v.description) == null ? void 0 : a.trim();
              t.description = i || null;
            }
            (y.email !== v.email && (t.email = v.email || null),
              y.priceTier !== v.priceTier &&
                (t.priceTier = v.priceTier || null),
              N != null &&
                ((t.latitude = N.latitude), (t.longitude = N.longitude)));
            var l = y.serviceAreaRadius !== v.serviceAreaRadius,
              s = y.locationNotes !== v.locationNotes;
            if (l || s) {
              var c,
                d,
                m,
                p,
                _,
                f,
                g = Number(v.serviceAreaRadius) || 0,
                h =
                  (c =
                    (d = N == null ? void 0 : N.latitude) != null
                      ? d
                      : (m = u.businessProfile) == null
                        ? void 0
                        : m.latitude) != null
                    ? c
                    : 0,
                b =
                  (p =
                    (_ = N == null ? void 0 : N.longitude) != null
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
                  longitude: b,
                  areaDescription: v.locationNotes,
                },
              ];
            }
            var S =
              y.primaryWebsite !== v.primaryWebsite ||
              y.secondaryWebsite !== v.secondaryWebsite;
            if (S) {
              var R = [];
              (v.primaryWebsite && R.push({ url: v.primaryWebsite }),
                v.secondaryWebsite && R.push({ url: v.secondaryWebsite }),
                (t.website = R));
            }
            var L = r("isEmptyObject")(t)
              ? (e || (e = n("Promise"))).resolve()
              : o("WAWebBusinessProfileEdit").editBusinessProfile(t);
            L.then(function () {
              (C(v), M(null), E(!1));
            }).catch(function (e) {
              throw (E(!1), e);
            });
          }
        },
        q = function () {
          (l.isLid() ||
            r("WAWebODS").incr("web.biz_profile.edit_profile.non_lid"),
            o("WAWebBizGatingUtils").bizProfileGraphQLMigrationEnabled() &&
            l.isLid()
              ? B()
              : W());
        },
        U = function () {
          if (!F) {
            i();
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
                (o("WAWebModalManager").ModalManager.close(), q());
              },
              onCancel: function () {
                (o("WAWebModalManager").ModalManager.close(),
                  S(y),
                  M(null),
                  T(function (e) {
                    return e + 1;
                  }));
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
        };
      return (
        m(
          function () {
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.viewProfile(a);
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              t = o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.get(e);
            t &&
              (t.markStale(),
              T(function (e) {
                return e + 1;
              }));
          },
          [a],
        ),
        c.jsxs(r("WAWebDrawer.react"), {
          testid: void 0,
          xstyle: _.drawerWithMinWidth,
          tsNavigationData: {
            surface: "unknown",
            viewName: "biz-refreshed-profile",
          },
          children: [
            c.jsx(r("WAWebProfileDrawerHeader.react"), {
              onClose: U,
              onSave: q,
              hasChanges: F,
              isSaving: L,
              saveDisabled: !x,
            }),
            c.jsx(
              r("WAWebProfileDrawerBody.react"),
              {
                about: g != null ? g : "",
                onFieldChange: O,
                onLocationSelect: w,
                bizProfileValues: v,
                onSave: A,
                onValidationChange: $,
                selectedLocation: N,
              },
              I,
            ),
          ],
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
