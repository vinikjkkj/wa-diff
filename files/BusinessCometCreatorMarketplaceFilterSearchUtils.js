__d(
  "BusinessCometCreatorMarketplaceFilterSearchUtils",
  [
    "fbt",
    "$InternalEnum",
    "BusinessCometCreatorMarketplaceCountryFilter",
    "BusinessCometCreatorMarketplaceCreatorCountryFilter",
    "BusinessCometCreatorMarketplaceVerticalFilter",
    "GeoLink.react",
    "HierarchicalTreeSearchableEntry",
    "HierarchicalTreeStaticSearchSource",
    "IGCMGeoRegionEnum.experimental",
    "SearchableEntry",
    "StaticSearchSource",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum").Mirrored(["CREATOR_TRAITS", "TARGET_AUDIENCE"]),
      d = function (t) {
        var e;
        return (e =
          t == null
            ? void 0
            : t
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim()) != null
          ? e
          : "";
      },
      m = function (t, n) {
        var e = t.display_name;
        return d(e == null ? void 0 : e.toString()).includes(d(n));
      },
      p = s._(
        /*BTDS*/ "State-level filtering is available when only one country from the {=m2} is selected.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              href: "https://help.instagram.com/1389278101788752/?helpref=related_articles",
              children: s._(/*BTDS*/ "creator marketplace list"),
            }),
          ),
        ],
      ),
      _ = s._(/*BTDS*/ "Not available"),
      f = s._(/*BTDS*/ "Applied filter count"),
      g = s._(/*BTDS*/ "No matching results.");
    function h(e, t) {
      return e.includes(t);
    }
    function y(e, t, n) {
      return function (r) {
        t(
          r
            ? [].concat(e, [n])
            : e.filter(function (e) {
                return e !== n;
              }),
        );
      };
    }
    var C = {};
    function b(e, t) {
      var n = t != null ? t : new Array(0);
      return e.map(function (e) {
        var t = new (r("HierarchicalTreeSearchableEntry"))({
          auxiliaryData: e,
          pathFromRoot: n,
          title: e.title,
          uniqueID: e.uniqueID,
        });
        return (
          t.setCategorySearchSource(
            e.children != null && e.children.length > 0
              ? new (r("HierarchicalTreeStaticSearchSource"))(
                  b(e.children, [].concat(n, [t])),
                )
              : null,
          ),
          (e.entry = t),
          (C[e.uniqueID] = t),
          t
        );
      });
    }
    function v(e) {
      var t = e.choices.map(function (e) {
          var t;
          return {
            children:
              (t = e.children) == null
                ? void 0
                : t.map(function (e) {
                    return { title: e.display_name, uniqueID: e.graphql_value };
                  }),
            title: e.display_name,
            uniqueID: e.graphql_value,
          };
        }),
        n =
          e.graphql_value !==
          r("BusinessCometCreatorMarketplaceVerticalFilter").graphql_value
            ? []
            : b(t);
      return new (r("HierarchicalTreeStaticSearchSource"))(n);
    }
    function S(e) {
      return function (t) {
        var n, o;
        switch (e) {
          case "ASIA_PACIFIC":
          case "EUROPE":
          case "LATIN_AMERICA":
            return (
              (n =
                (o = r("IGCMGeoRegionEnum.experimental").geo_regions.find(
                  function (t) {
                    return t.id === e;
                  },
                )) == null || (o = o.countries) == null
                  ? void 0
                  : o.map(function (e) {
                      return e.country_iso_code;
                    })) != null
                ? n
                : []
            ).includes(t);
          case "UNITED_STATES":
            return t === "US";
          case "ANYWHERE":
          default:
            return !0;
        }
      };
    }
    function R(e, t, n) {
      n === void 0 && (n = e.choices);
      var a = n;
      return (
        (e ===
          o("BusinessCometCreatorMarketplaceCountryFilter")
            .BusinessCometCreatorMarketplaceCountryFilter ||
          e ===
            o("BusinessCometCreatorMarketplaceCreatorCountryFilter")
              .BusinessCometCreatorMarketplaceCreatorCountryFilter) &&
          t &&
          (a = a.filter(function (e) {
            return S(t)(e.graphql_value);
          })),
        new (r("StaticSearchSource"))(
          a.map(function (e) {
            var t;
            return new (r("SearchableEntry"))({
              auxiliaryData: { isPopular: (t = e.is_popular) != null ? t : !1 },
              title: e.display_name,
              uniqueID: e.graphql_value,
            });
          }),
        )
      );
    }
    function L(e, t) {
      var n = [];
      return (
        t.forEach(function (t) {
          var r = e.getSearchableEntries().find(function (e) {
            return e.getUniqueID() === t;
          });
          r && n.push(r);
        }),
        n
      );
    }
    function E(e) {
      return e.map(function (e) {
        return C[e];
      });
    }
    function k(e) {
      return function (t, n) {
        var r = e
            .map(function (e) {
              return e.getUniqueID();
            })
            .includes(t.getUniqueID()),
          a = e
            .map(function (e) {
              return e.getUniqueID();
            })
            .includes(n.getUniqueID()),
          i = t.getAuxiliaryData().isPopular,
          l = n.getAuxiliaryData().isPopular;
        return r !== a
          ? r
            ? -1
            : 1
          : i === !0 && l === !0
            ? o(
                "BusinessCometCreatorMarketplaceCountryFilter",
              ).CountriesOpenForCreatorOnboardingIncludingCN.indexOf(
                t.getUniqueID(),
              ) <
              o(
                "BusinessCometCreatorMarketplaceCountryFilter",
              ).CountriesOpenForCreatorOnboardingIncludingCN.indexOf(
                n.getUniqueID(),
              )
              ? -1
              : 1
            : i !== l
              ? i === !0
                ? -1
                : 1
              : t.getTitle().localeCompare(n.getTitle());
      };
    }
    ((l.FilterCategoryEnum = c),
      (l.normalizeString = d),
      (l.choiceMatchesQuery = m),
      (l.unavailableRegionFilterDueToSelectedCountryNotSupported = p),
      (l.unavailableFilterHeader = _),
      (l.appliedFilterCountBadgeLabel = f),
      (l.noSearchResultFromTextInput = g),
      (l.isChoiceSelectedInMultipleChoice = h),
      (l.setChoiceInMultipleChoices = y),
      (l.genHierarchicalTreeSearchSource = v),
      (l.genFilterChoiceSearchSource = R),
      (l.getSearchableEntryArrayFromStringArray = L),
      (l.getHierarchicalTreeSearchableEntryArrayFromStringArray = E),
      (l.pinSelectedAndPopularSearchableEntriesToTopCompare = k));
  },
  226,
);
