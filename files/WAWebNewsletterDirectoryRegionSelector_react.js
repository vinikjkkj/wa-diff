__d(
  "WAWebNewsletterDirectoryRegionSelector.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebBusinessWebsiteIcon.react",
    "WAWebCaretDownIcon.react",
    "WAWebCellV2.react",
    "WAWebCountriesUtils",
    "WAWebCurrentUser",
    "WAWebEmptyState.react",
    "WAWebFilterActiveIcon.react",
    "WAWebFilterIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebListFilterButton.react",
    "WAWebModalManager",
    "WAWebModalsListModal.react",
    "WAWebNoop",
    "WAWebSingleSelection",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WDSBaseRadio.react",
    "WDSIconIcPublic.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "useWAWebActiveSelection",
    "useWAWebDebouncedSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = 16,
      g = o("WAWebModalsListModal.react").ListModalFactory();
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebCountriesUtils").getCountries({
              filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                .WHATSAPP_REGISTRATION,
              prependWith: o("WAWebCurrentUser").isEmployee()
                ? ["", r("fbs")._(/*BTDS*/ "Global")]
                : void 0,
            }),
            t = new Map(e),
            n = e.map(function (e) {
              var t = e[0],
                n = e[1];
              return { code: t, name: n };
            });
          return { map: t, list: n };
        })),
        y.apply(this, arguments)
      );
    }
    var C = n("$InternalEnum").Mirrored(["MenuBar", "ListFilter"]);
    function b(t) {
      var n = t.onSelectCountry,
        a = t.selectedCountry,
        i = t.theme,
        l = o(
          "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
        ).getCountryCodeIso(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
        ),
        u = _({ map: new Map(), list: [] }),
        d = u[0],
        p = u[1];
      m(function () {
        h()
          .then(p)
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-region-selector] country filter load failed: ",
                    "",
                  ])),
                t,
              )
              .verbose();
          });
      }, []);
      var g = d.list,
        y = d.map,
        b = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(S, {
              countryList: g,
              selectedCountryCode: a,
              onSelect: function (t) {
                var e = t.code;
                n(e);
              },
            }),
          );
        };
      if (g.length < 1) return null;
      var v = l !== a;
      if (i === C.ListFilter) {
        var R;
        return c.jsx(r("WAWebListFilterButton.react"), {
          label: (R = y.get(a)) != null ? R : "",
          selected: v,
          onClick: b,
          startIcon: c.jsx(
            o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
            { width: f, height: f },
          ),
          startWDSIcon: r("WDSIconIcPublic.react"),
          showEndDropdownIcon: !0,
          endIcon: c.jsx(o("WAWebCaretDownIcon.react").CaretDownIcon, {}),
        });
      }
      return c.jsx(r("WDSMenuBarItem.react"), {
        tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
        testid: void 0,
        icon: v
          ? o("WAWebFilterActiveIcon.react").FilterActiveIcon
          : o("WAWebFilterIcon.react").FilterIcon,
        onClick: b,
        title: s._(/*BTDS*/ "Select region"),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.active,
        n = e.country,
        a = e.onClick,
        i = e.selected,
        l = r("useWAWebActiveSelection")(t, n.code),
        s = l[0],
        u = l[1],
        d = function () {
          a(n);
        },
        m = { enter: d, space: d };
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: s,
        handlers: m,
        role: "button",
        children: c.jsx(r("WAWebCellV2.react"), {
          active: u,
          onClick: d,
          colorScheme: "default",
          size: "large",
          border: "bottom-partial",
          primary: c.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: n.name,
          }),
          detailLeft: c.jsx(r("WDSBaseRadio.react"), {
            value: String(n.code),
            name: "region",
            checked: i,
            disabled: !1,
            testid: void 0,
            onChange: r("WAWebNoop"),
            "aria-label": n.name,
          }),
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.countryList,
        n = e.onSelect,
        a = e.selectedCountryCode,
        i = p(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }, []),
        l = r("useWAWebDebouncedSearch")(),
        u = l[0],
        d = l[1],
        m = p(
          function () {
            var e = t.filter(function (e) {
                var t = e.code,
                  n = e.name;
                if (u.trim() === "") return !0;
                var r = u.toLowerCase();
                return (
                  t.toLowerCase() === r ||
                  n.toString().toLowerCase().startsWith(r)
                );
              }),
              n = -1,
              r = e.map(function (e, t) {
                return (
                  e.code === a && (n = t),
                  {
                    country: e,
                    selected: e.code === a,
                    itemKey: e.code.toString(),
                  }
                );
              });
            return (i.init(r), i.set(n, !0), r);
          },
          [t, u],
        ),
        _ = function (t) {
          (n(t), o("WAWebModalManager").closeModalManager());
        };
      return c.jsx(g, {
        isNewsletter: !0,
        title: s._(/*BTDS*/ "Region"),
        data: m,
        renderItem: function (t) {
          var e = t.country,
            n = t.selected;
          return c.jsx("div", {
            className: "x1phvje8 xcldk2z",
            children: c.jsx(v, {
              country: e,
              selected: n,
              onClick: _,
              active: i,
            }),
          });
        },
        onCancel: o("WAWebModalManager").closeModalManager,
        onSearch: d,
        emptyState: c.jsx(o("WAWebEmptyState.react").NoSearchResults, {
          testid: void 0,
          center: !1,
        }),
        selection: i,
        scrollToInitialSelection: !0,
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.NewsletterDirectoryRegionSelectorTheme = C),
      (l.NewsletterDirectoryRegionSelector = b));
  },
  226,
);
