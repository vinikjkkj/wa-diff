__d(
  "WAWebMusicViewerCountry",
  [
    "WAPhoneFindCC",
    "WAWebAsISOCountryCode",
    "WAWebL10NCountryCodes",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        "1",
        [
          ["AG", /^268/],
          ["AI", /^264/],
          ["AS", /^684/],
          ["BB", /^246/],
          ["BM", /^441/],
          ["BS", /^242/],
          [
            "CA",
            /^(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))/,
          ],
          ["DM", /^767/],
          ["DO", /^(?:8001|8[024]9)/],
          ["GD", /^473/],
          ["GU", /^671/],
          ["JM", /^(?:658|876)/],
          ["KN", /^869/],
          ["KY", /^345/],
          ["LC", /^758/],
          ["MP", /^670/],
          ["MS", /^664/],
          ["PR", /^(?:787|939)/],
          ["SX", /^721/],
          ["TC", /^649/],
          ["TT", /^868/],
          ["VC", /^784/],
          ["VG", /^284/],
          ["VI", /^340/],
        ],
      ],
      ["7", [["KZ", /^(?:33622|7)/]]],
      ["39", [["VA", /^06698/]]],
      [
        "44",
        [
          ["GG", /^(?:1481[25-9]|7(?:781|839|911[17]))/],
          ["IM", /^(?:74576|(?:16|7[56])24)/],
          ["JE", /^(?:1534[0-24-8]|7(?:509|7(?:00[378]|97)|829|937))/],
        ],
      ],
      ["47", [["SJ", /^79/]]],
      ["262", [["YT", /^(?:26(?:89|9)|639|7093[5-7])/]]],
      ["358", [["AX", /^18/]]],
      ["599", [["BQ", /^[347]/]]],
    ]);
    function s() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return e != null ? u(e.user) : null;
    }
    function u(t) {
      var n,
        r = o("WAPhoneFindCC").findCC(t),
        a = t.slice(r.length),
        i =
          (n = e.get(r)) == null
            ? void 0
            : n.find(function (e) {
                var t = e[1];
                return t.test(a);
              });
      return o("WAWebAsISOCountryCode").asISOCountryCode(
        i != null
          ? i[0]
          : o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t),
      );
    }
    ((l.getMusicViewerCountry = s), (l.getMusicCountryForPhoneNumber = u));
  },
  98,
);
