__d(
  "LSUpsertTheme",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return (
            t.i64.neq(e[12], void 0) ? (n[0] = e[12]) : (n[0] = e[0]),
            t.db
              .table(116)
              .put({
                fbid: e[0],
                themeIdx: e[1],
                fallbackColor: e[2],
                reverseGradiantsForRadial: e[3],
                accessibilityLabel: e[4],
                iconUrl: e[5],
                iconUrlFallback: e[6],
                backgroundUrl: e[8],
                description: e[9],
                themeType: e[10],
                isDeprecated: e[11],
                normalThemeId: n[0],
                appColorMode: e[13],
                titlebarBackgroundColor: e[14],
                titlebarButtonTintColor: e[15],
                titlebarTextColor: e[16],
                titlebarAttributionTextColor: e[17],
                composerTintColor: e[18],
                composerUnselectedTintColor: e[19],
                composerInputTextPlaceholderColor: e[20],
                composerInputBackgroundColor: e[21],
                composerInputBorderColor: e[22],
                composerInputBorderWidth: e[23],
                composerBackgroundColor: e[24],
                messageTextColor: e[25],
                messageBorderColor: e[26],
                messageBorderWidth: e[27],
                incomingMessageTextColor: e[28],
                incomingMessageBorderColor: e[29],
                incomingMessageBorderWidth: e[30],
                deliveryReceiptColor: e[31],
                tertiaryTextColor: e[32],
                primaryButtonBackgroundColor: e[33],
                hotLikeColor: e[34],
                reactionPillBackgroundColor: e[35],
                secondaryTextColor: e[36],
                quotedIncomingMessageBubbleColor: e[37],
                cornerRadius: e[38],
                blurredComposerBackgroundColor: e[39],
                composerSecondaryButtonColor: e[40],
                composerPlaceholderTextColor: e[41],
              })
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSThreadThemeUpsertThemeStoredProcedure"),
      (e.__tables__ = ["thread_themes"]),
      (a.exports = e));
  },
  null,
);
