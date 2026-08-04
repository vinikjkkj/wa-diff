__d(
  "WAWebWindowsHybridBridge.v2631",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2631",
    "WAWebWindowsHybridBridgeAbProps.v2631",
    "WAWebWindowsHybridBridgeAdv.v2631",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2631",
    "WAWebWindowsHybridBridgeConnection.v2631",
    "WAWebWindowsHybridBridgeContacts.v2631",
    "WAWebWindowsHybridBridgeDebugFeatures.v2631",
    "WAWebWindowsHybridBridgeLinksPreview.v2631",
    "WAWebWindowsHybridBridgeMediaFiles.v2631",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2631",
    "WAWebWindowsHybridBridgeMetaConfig.v2631",
    "WAWebWindowsHybridBridgeNativeAppState.v2631",
    "WAWebWindowsHybridBridgeOds.v2631",
    "WAWebWindowsHybridBridgePictures.v2631",
    "WAWebWindowsHybridBridgePreferences.v2631",
    "WAWebWindowsHybridBridgeRateTheApp.v2631",
    "WAWebWindowsHybridBridgeRingtone.v2631",
    "WAWebWindowsHybridBridgeScalingControl.v2631",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2631",
    "WAWebWindowsHybridBridgeSharesheet.v2631",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2631",
    "WAWebWindowsHybridBridgeTouchpadFix.v2631",
    "WAWebWindowsHybridBridgeVoip.v2631",
    "WAWebWindowsHybridBridgeWam.v2631",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2631",
          ).WindowsHybridBridgeAbProps_v2631)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2631",
          ).WindowsHybridBridgeWam_v2631)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2631",
          ).WindowsHybridBridgePreferences_v2631)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2631",
          ).WindowsHybridBridgeScalingControl_v2631)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2631",
          ).WindowsHybridBridgeOds_v2631)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2631",
          ).WindowsHybridBridgePictures_v2631)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2631",
            ).WindowsHybridBridgeDebugFeatures_v2631)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2631",
          ).VoipWinRTBridge_v2631)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2631",
          ).WAWebWindowsHybridBridgeRateTheApp_v2631)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2631",
          ).WindowsHybridBridgeConnection_v2631)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2631",
          ).WindowsHybridBridgeTouchpadFix_v2631)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2631",
          ).WindowsHybridBridgeLinksPreview_v2631)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2631",
            ).WindowsHybridBridgeContacts_v2631)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2631",
            ).WindowsHybridBridgeContacts_v2631)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2631",
          ).WAWebWindowsHybridBridgeMediaFiles_v2631)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2631",
          ).WAWebWindowsHybridBridgeSharesheet_v2631)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2631",
          ).WindowsHybridAppActivationBridge_v2631)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2631",
          ).WindowsHybridBridgeNativeAppState_v2631)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2631",
          ).WindowsHybridBridgeSystemIntegrations_v2631)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2631",
          ).WindowsHybridBridgeBrowserExtensions_v2631)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2631",
          ).WindowsHybridBridgeSeamlessMigration_v2631)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2631",
          ).WindowsHybridBridgeMediaTranscoder_v2631)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2631",
          ).WindowsHybridBridgeAdv_v2631)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2631",
          ).WindowsHybridBridgeRingtone_v2631)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2631",
          ).WindowsHybridBridgeMetaConfig_v2631)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2631 = e;
  },
  98,
);
