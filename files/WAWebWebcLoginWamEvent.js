__d(
  "WAWebWebcLoginWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcLogin: [
            1664,
            {
              webcBrowserNetworkType: [14, e.TYPES.STRING],
              webcBrowserStorageQuotaBytes: [15, e.TYPES.INTEGER],
              webcBrowserStorageQuotaUsedBytes: [16, e.TYPES.INTEGER],
              webcLoginT: [3, e.TYPES.TIMER],
              webcPersistentLoginEnabled: [17, e.TYPES.BOOLEAN],
              webcQrCodes: [1, e.TYPES.INTEGER],
              webcQrLoadT: [2, e.TYPES.TIMER],
              webcSyncChatCount: [8, e.TYPES.INTEGER],
              webcSyncChatSize: [10, e.TYPES.INTEGER],
              webcSyncChatT: [9, e.TYPES.TIMER],
              webcSyncContactCount: [11, e.TYPES.INTEGER],
              webcSyncContactSize: [13, e.TYPES.INTEGER],
              webcSyncContactT: [12, e.TYPES.TIMER],
              webcSyncMessageCount: [5, e.TYPES.INTEGER],
              webcSyncMessageSize: [7, e.TYPES.INTEGER],
              webcSyncMessageT: [6, e.TYPES.TIMER],
              webcSyncT: [4, e.TYPES.TIMER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcLogin: [] },
      );
    l.WebcLoginWamEvent = s;
  },
  98,
);
