class MyPanelGroup extends eui.Panel {
	public constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();

// 		exml = `<e:Skin class="skins.PanelSkin" minHeight="230" minWidth="450" xmlns:e="http://ns.egret.com/eui">
//     <e:Image left="0" right="0" bottom="0"  top="0" source="border_png" scale9Grid="2,2,12,12" />
//     <e:Group id="moveArea" left="0" right="0" top="0" height="45">
//         <e:Image left="0" right="0" bottom="0"  top="0" source="header_png"/>
//         <e:Label id="titleDisplay" size="20" fontFamily="Tahoma" textColor="0xFFFFFF"
//                  wordWrap="false" left="15" right="5" verticalCenter="0"/>
//     </e:Group>
//     <e:Button id="closeButton" label="close" bottom="5" horizontalCenter="0"/>
// </e:Skin>
// `;

// 		this.skinName = exml;
		this.title = "Hello Panel";
	}
}