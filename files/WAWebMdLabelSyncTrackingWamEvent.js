__d(
  "WAWebMdLabelSyncTrackingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLabelSyncDeviceRoleType",
    "WAWebWamEnumLabelSyncDirectionType",
    "WAWebWamEnumLabelSyncResultType",
    "WAWebWamEnumLabelSyncTypeEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdLabelSyncTracking: [
            7638,
            {
              labelSyncDeviceRole: [
                1,
                o("WAWebWamEnumLabelSyncDeviceRoleType")
                  .LABEL_SYNC_DEVICE_ROLE_TYPE,
              ],
              labelSyncDirection: [
                2,
                o("WAWebWamEnumLabelSyncDirectionType")
                  .LABEL_SYNC_DIRECTION_TYPE,
              ],
              labelSyncHasPending: [3, e.TYPES.BOOLEAN],
              labelSyncHash: [4, e.TYPES.STRING],
              labelSyncIsCapiHosted: [5, e.TYPES.BOOLEAN],
              labelSyncIsLabeled: [6, e.TYPES.BOOLEAN],
              labelSyncResult: [
                7,
                o("WAWebWamEnumLabelSyncResultType").LABEL_SYNC_RESULT_TYPE,
              ],
              labelSyncTimestamp: [8, e.TYPES.INTEGER],
              labelSyncType: [
                9,
                o("WAWebWamEnumLabelSyncTypeEnum").LABEL_SYNC_TYPE_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdLabelSyncTracking: [] },
      );
    l.MdLabelSyncTrackingWamEvent = s;
  },
  98,
);
