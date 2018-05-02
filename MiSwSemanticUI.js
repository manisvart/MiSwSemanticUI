/*
 * A wrapper for the Semantic UI library
 * https://semantic-ui.com/
 *
 * It depends on the "MiS wrapper for the DOM"
 */

import * as MiSwDOM from "./../MiSwDOM/MiSwDOM.js";

class SemanticUI extends MiSwDOM.Element {
	constructor(type) {
		super(type);
	}
	top() {
		this.addClass("top");
		return this;
	}
	/*
	 * Colors
	 */
	red() {
		this.addClass("red");
		return this;
	}
	orange() {
		this.addClass("orange");
		return this;
	}
	yellow() {
		this.addClass("yellow");
		return this;
	}
	olive() {
		this.addClass("olive");
		return this;
	}
	green() {
		this.addClass("green");
		return this;
	}
	teal() {
		this.addClass("teal");
		return this;
	}
	blue() {
		this.addClass("blue");
		return this;
	}
	violet() {
		this.addClass("violet");
		return this;
	}
	purple() {
		this.addClass("purple");
		return this;
	}
	pink() {
		this.addClass("pink");
		return this;
	}
	brown() {
		this.addClass("brown");
		return this;
	}
	grey() {
		this.addClass("grey");
		return this;
	}
	black() {
		this.addClass("black");
		return this;
	}
	inverted() {
		this.addClass("inverted");
		return this;
	}
	/*
	 * Sizes
	 */
	mini() {
		this.addClass("mini");
		return this;
	}
	tiny() {
		this.addClass("tiny");
		return this;
	}
	small() {
		this.addClass("small");
		return this;
	}
	medium() {
		this.addClass("medium");
		return this;
	}
	large() {
		this.addClass("large");
		return this;
	}
	big() {
		this.addClass("big");
		return this;
	}
	huge() {
		this.addClass("huge");
		return this;
	}
	massive() {
		this.addClass("massive");
		return this;
	}
	/*
	 * Shape modification
	 */
	rounded() {
		this.addClass("rounded");
		return this;
	}
	circular() {
		this.addClass("circular");
		return this;
	}
	compact() {
		this.addClass("compact");
		return this;
	}
	fluid() {
		this.addClass("fluid");
		return this;
	}
	right() {
		this.addClass("right floated");
		return this;
	}
	bordered() {
		this.addClass("bordered");
		return this;
	}
	/*
	 * State
	 */
	disable() {
		this.addClass("disabled");
		return this;
	}
	enable() {
		this.removeClass("disabled");
		return this;
	}
	hidden() {
		this.addClass("hidden");
		return this;
	}
}


/*
 * Buttons https://semantic-ui.com/elements/button.html
 */
export class Button extends SemanticUI {
	constructor(optionalText, optionalCallback) {
		super("button");
		this.addClass("ui button");
		if (optionalText !== undefined)
			this.addText(optionalText);

		if(optionalCallback) {
			this.dom().addEventListener("click", function () {
				optionalCallback();
			});
		}
	}
	primary() {
		this.addClass("primary");
		return this;
	}
	secondary() {
		this.addClass("secondary");
		return this;
	}
	positive() {
		this.addClass("positive");
		return this;
	}
	negative() {
		this.addClass("negative");
		return this;
	}
	basic() {
		this.addClass("basic");
		return this;
	}
}


/*
 * Icons https://semantic-ui.com/elements/icon.html
 */
export class IconGroup extends SemanticUI {
	constructor(icons) {
		super("i");
		this.addClass("icons");
		
		icons.forEach(function(icon){
			this.add(icon);
		});
	}
	
}
export class Icon extends SemanticUI {
	constructor(type, optionalCallback) {
		super("i");
		this.addClass(type).addClass("icon");

		if(optionalCallback) {
			this.dom().addEventListener("click", function () {
				optionalCallback();
			});
		}

	}
	fitted() {
		this.addClass("fitted");
		return this;
	}
	link() {
		this.addClass("link");
		return this;
	}
	horizontallyFlipped() {
		this.addClass("horizontally flipped");
		return this;
	}
	verticallyFlipped() {
		this.addClass("vertically flipped");
		return this;
	}
	clockwiseRotated() {
		this.addClass("clockwise rotated");
		return this;
	}
	counterclockwiseRotated() {
		this.addClass("counterclockwise rotated");
		return this;
	}
	corner() {
		this.addClass("corner");
		return this;
	}
}

/*
 * Image https://semantic-ui.com/elements/image.html
 */

export class Image extends SemanticUI {
	constructor(src) {
		super("img", src);
		this.addClass("image");
	}
	avatar() {
		this.addClass("avatar");
		return this;
	}
}

export class SVGImage extends SemanticUI {
	constructor(src) {
		super(svg);
		this.add(this._img = new MiSwDOM.Element("img")
			.attribute({"xmlns:xlink":"http://www.w3.org/1999/xlink"})
			.attribute({"xmlns:href":src})
		);
		this._img.addClass("image");
	}	
	avatar() {
		this._img.addClass("avatar");
		return this;
	}
}


/*
 * Text input https://semantic-ui.com/elements/input.html
 */

export class Input extends SemanticUI {
	constructor(type, placeholder, optionalCallback) {
		super("div");

		this.addClass("ui input")
			.add(this._input = new MiSwDOM.Element("input")
				.attribute({type: type, placeholder: placeholder})
				);
		
		if(optionalCallback) {
			let _this = this;
			function valueChanged() {
				optionalCallback(_this.readValue());
			}
			
			this._input.dom().addEventListener("input", valueChanged);
			this._input.dom().addEventListener("change", valueChanged);
		}
	}
	focus() {
		this.addClass("focus");
		return this;
	}
	error() {
		this.addClass("error");
		return this;
	}
	rightIcon(icon) {
		this.addClas("icon").add(icon);
		return this;
	}
	leftIcon(icon) {
		this.addClas("left icon").insertChild(icon, this._input);
		return this;
	}
	label(element) {
		this.insertChild(element, this._input);
		return this;
	}
	leftLabel(label) {
		this.addClass("left labeled").insertChild(label, this._input);
		return this;
	}
	rightLabel(label) {
		this.addClass("right labeled").add(label);
		return this;
	}
	leftAction(action) {
		this.addClass("left action").insertChild(action, this._input);
		return this;
	}
	rightAction(action) {
		this.addClass("right action").add(action);
		return this;
	}
	transparent() {
		this.addClass("transparent");
	}
	readValue() {
		return this._input.dom().value;
	}
	updateValue(value) {
		this._input.dom().value = value;
		return this;
	}
}

/*
 * Text input
 */
export class TextInput extends Input {
	constructor(placeholder,optionalCallback) {
		super("text", placeholder, optionalCallback);
	}
}

/*
 * Numeric input
 */
export class NumericInput extends Input {
	constructor(placeholder,optionalCallback) {
		super("number", placeholder, optionalCallback);
	}	
}

export class Checkbox extends Input {
	constructor(optionalCallback) {
		super("checkbox", undefined, optionalCallback);
		this.addClass("checkbox");
	}		
}


export class NumericField extends SemanticUI {
	constructor(optionalText, units, unitChangeFun) {
		super("div");

		this._dropdown = new MiSwDOM.Element("div")
		.addClass("ui dropdown label")
		;
		var text = new MiSwDOM.Element("div")
		.addClass("text")
		.add(new MiSwDOM.Element("text", units[0]))
		;
		var icon = new Icon("dropdown");

		var menu = new MiSwDOM.Element("div").addClass("menu");
		units.forEach(function (unit) {
			menu.add(new MiSwDOM.Element("div")
			.addClass("item")
			.add(new MiSwDOM.Element("text", unit))
			);
		}, this);

		this._input = new MiSwDOM.Element("input")
		.attribute({type: "number", placeholder: optionalText});

		this
		.addClass("ui input right labeled")
		.add(this._input)
		.add(this._dropdown
				.add(text)
				.add(icon)
				.add(menu)
		)
		;

		$(this._dropdown.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				if (value !== undefined && text !== undefined) {
					unitChangeFun(value);
				}
			}
		});

	}
	readValue() {
		return this._input.dom().value;
	}
	readUnit() {
		return $(this._dropdown.dom())
		.dropdown('get value')
		;
	}
	updateValue(value) {
		this._input.dom().value = value;
		return this;
	}
	updateUnit(unit) {
		$(this._dropdown.dom())
		.dropdown('set selected', unit)
		;
		return this;
	}
}

export class TextBox extends SemanticUI {
	constructor(optionalText) {
		super("div");
		if (optionalText !== undefined)
			this.addText(optionalText);
	}
	updateValue(value) {
		this.removeChildren();
		this.addText(value);
		return this;
	}
}


export class SearchField extends SemanticUI {
	constructor(optionalText) {
		super("div");

		this._input = new MiSwDOM.Element("input")
		.attribute({type: "text", placeholder: optionalText})
		.addClass("prompt")
		;

		var icon = new Icon("search");

		this
		.addClass("ui search")
		.add(new MiSwDOM.Element("div").addClass("ui icon input")
				.add(this._input)
				.add(icon)
		)
		.add(new MiSwDOM.Element("div").addClass("result"))
		;
	}
	readValue() {
		return this._input.dom().value;
	}
	updateValue(value) {
		this._input.dom().value = value;
		return this;
	}
}


/*
 * Labels https://semantic-ui.com/elements/label.html
 * 
 * Example: new Label().add(new Icon("mail")).addText("23"); new
 * Label().image().add(new Image("/images/avatar/small/joe.jpg")).addTex("Joe");
 * 
 */

export class Label extends SemanticUI {
	constructor() {
		super("div");
		this.addClass("ui label");
	}
	image() {
		this.addClass("image");
		return this;
	}
	pointing() {
		this.addClass("pointing");
		return this;
	}
	belowPointing() {
		this.addClass("pointing below");
		return this;
	}
	rightPointing() {
		this.addClass("right pointing");
		return this;
	}
	leftPointing() {
		this.addClass("left pointing");
		return this;
	}
	leftCorner() {
		this.addClass("left corner");
		return this;
	}
	rightCorner() {
		this.addClass("right corner");
		return this;
	}
	tag() {
		this.addClass("tag");
		return this;
	}
	ribbon() {
		this.addClass("ribbon");
		return this;
	}
	rightRibbon() {
		this.addClass("right ribbon");
		return this;
	}
	topAttached() {
		this.addClass("top attached");
		return this;
	}
	bottomAttached() {
		this.addClass("bottom attached");
		return this;
	}
	topRightAttached() {
		this.addClass("top right attached");
		return this;
	}
	topLeftAttached() {
		this.addClass("top left attached");
		return this;
	}
	bottomRightAttached() {
		this.addClass("bottom right attached");
		return this;
	}
	bottomLeftAttached() {
		this.addClass("bottom left attached");
		return this;
	}
	horizontal() {
		this.addClass("horizontal");
		return this;
	}
	floating() {
		this.addClass("floating");
		return this;
	}
}

export class Message extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("ui message");
		if (optionalText !== undefined)
			this.addText(optionalText);
	}
	icon(iconType) {
		this.addClass("icon");
		this.add(new Icon(iconType));
		return this;
	}
	error() {
		this.addClass("negative");
		return this;
	}
}

export class Header extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("header");
		if (optionalText !== undefined)
			this.addText(optionalText);
	}
}

export class Content extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("content");
		if (optionalText !== undefined)
			this.addText(optionalText);
	}
}

export class Sidebar extends SemanticUI {
	constructor(optionalText) {
		super("div");

		this._closable = true;
		this._transition = "";
		this._dimPage = true;

		this.addClass("ui sidebar");
		if (optionalText !== undefined)
			this.addText(optionalText);
	}
	pusher(element) {
		element.addClass("pusher");
		document.body.insertBefore(this.dom(), element.dom());
		return this;
	}
	closable() {
		this._closable = true;
		return this;
	}
	notClosable() {
		this._closable = false;
		return this;
	}
	dimPage() {
		this._dimPage = true;
		return this;
	}
	dontDimPage() {
		this._dimPage = false;
		return this;
	}
	scaleDown() {
		this._transition = "scale down";
		return this;
	}
	execute() {
		$(this.dom()).sidebar({
			transition: this._transition,
			closable: this._closable,
			dimPage: this._dimPage
		});
		return this;
	}
	show() {
		$(this.dom()).sidebar('show')
		;
		return this;
	}
	pushPage() {
		$(this.dom()).sidebar('push page')
		;
		return this;
	}
}

/*
 * Dropdown https://semantic-ui.com/modules/dropdown.html
 */


export class DropdownBase extends SemanticUI {
	constructor(optionalCallback) {
		super("div");
		
		this._value = "";
		this._items = []; /* The items in the dropdown */
		this
			.addClass("ui dropdown")
			.add(this._menu = new MiSwDOM.Element("div").addClass("menu"))
		;
		
		if(optionalCallback) {
			var _this = this;
			$(this.dom()).dropdown({
				onChange: function (value, text, $selectedItem) {
					_this._value = value;
					optionalCallback(value, text, $selectedItem);
				}
			});	
		}
	}
	readValue() {
		return this._value;
	}
	updateValue(value) {
		this.value_ = value;
		$(this.dom()).dropdown("set selected", value);
	}
	addHeader(headerText, initialState = "") {
		var header;
		this._menu.add(header = new MiSwDOM.Element("div").addClass("header").addClass(initialState).addText(headerText));
		this._items.push(header);
		return this;
	}
	addDivider(initialState = "") {
		var divider;
		this._menu.add(divider = new MiSwDOM.Element("div").addClass("ui divider").addClass(initialState));
		this._items.push(divider);
		return this;
	}
	addItem(menuText, dataValue, initialState = "") {
		var item;
		this._menu.add(item = new MiSwDOM.Element("div").addClass("item").dataset({value: dataValue}).addClass(initialState).addText(menuText));
		this._items.push(item);
		return this;
	}
	addItems(objectList) {
		objectList.forEach(function(obj) {
			this.addItem(obj["menutext"], obj["datavalue"], obj["initialstate"])
		}, this);
		return this;
	}
	disableItems(itemList) {
		itemList.forEach(function (item) {
			this._items[item].addClass("disabled");
		}, this);
		return this;
	}
	enableItems(itemList) {
		itemList.forEach(function (item) {
			this._items[item].removeClass("disabled");
		}, this);
		return this;
	}
	topLeftPointing() {
		this.addClass("top left pointing");
		return this;
	}
}


/*
 * A dropdown attached to an icon
 */
export class DropdownIcon extends DropdownBase {
	constructor(icon, optionalCallback) {
		super(optionalCallback);
		this
			.addClass("icon")
			.topLeftPointing()
			.insertChild(new Icon(icon), this._menu)
		;
	}
}

/*
 * A "standard" dropdown
 */
export class DropdownStandard extends DropdownBase {
	constructor(text, optionalCallback) {
		super(optionalCallback);
		this
			.insertChild(new MiSwDOM.Element("div", text).addClass("text").addText(text), this._menu)
			.insertChild(new Icon("dropdown icon"), this._menu)
		;
	}
}



export class DropDown extends SemanticUI {
	constructor(icon, values, fun, text) {
		super("span");

		this
// .addClass("ui dropdown")
		.addClass("ui selection dropdown")
		;

		new MiSwDOM.Element("input").attribute({type: "hidden"}).attachTo(this);
		if (icon)
			icon.attachTo(this);

		if (text) {
			new MiSwDOM.Element("div")
			.addClass("default text")
			.add(new MiSwDOM.Element("text", text))
			.attachTo(this)
			;
		}

		var menu = new MiSwDOM.Element("div").addClass("menu").attachTo(this);


		values.forEach(function (v) {
			new MiSwDOM.Element("div")
			.addClass("item")
			.dataset({value: v.value})
			.addChildren([new MiSwDOM.Element("text", v.name)])
			.attachTo(menu)
			;
		}, this);

		$(this.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				if (value !== undefined && text !== undefined) {
					fun(value);
				}
			}
		});
	}
	clear() {
		$(this.dom()).dropdown('clear');

		/* Ugly hack */
// this.readChild(2).forEach(function (child) {
// child.classList.remove("active");
// child.classList.remove("selected");
// });

		$(this.dom()).dropdown('hide');

	}
}

export class DDButton extends SemanticUI {
	constructor(buttonText, color = "", callback) {
		super("span");
		this.value_ = "";
		this.items_ = []; /* The items in the dropdown */

		this.addClass("ui").addClass(color).addClass("buttons");
		this.add(new MiSwDOM.Element("div").addClass("ui button").add(new MiSwDOM.Element("text", buttonText)));
		this.add(this.dropdown_ = new MiSwDOM.Element("div").addClass("ui floating dropdown icon button")
				.add(new Icon("dropdown"))
				.add(this.menu_ = new MiSwDOM.Element("div").addClass("menu")));

		var this_ = this;
		$(this.dropdown_.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				this_.value_ = value;
				callback(value, text, $selectedItem);
			}
		});
	}
	addMenuItem(menuText, dataValue, initialState = "") {
		var item;
		this.menu_.add(item = new MiSwDOM.Element("div").addClass("item").dataset({value: dataValue}).addClass(initialState).add(new MiSwDOM.Element("text", menuText)));
		this.items_.push(item);

		return this;
	}
	addmenuItemWithIcon(icon, menuText, dataValue, initialState = "") {
		var item;
		this.menu_.add(item = new MiSwDOM.Element("div").addClass("item").dataset({value: dataValue}).addClass(initialState).add(new Icon(icon)).add(new MiSwDOM.Element("text", menuText)));
		this.items_.push(item);

		return this;
	}
	disableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].addClass("disabled");
		}, this);
		return this;
	}
	enableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].removeClass("disabled");
		}, this);
		return this;
	}
	readValue() {
		return this.value_;
	}
	select(value) {
		this.value_ = value;
		$(this.dropdown_.dom()).dropdown("set selected", value);
	}
}

export class MultiSelect extends SemanticUI {
	constructor(buttonText, color = "", callback) {
		super("div");
		this
		.add(this.select_ = new MiSwDOM.Element("select")
		.addClass("ui fluid search dropdown")
		.attribute({multiple: "x"})
		)
		.addMenuItem(buttonText, "")
		;

		var x = $(this.select_.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				callback(value, text, $selectedItem);
			},
			sortSelect: true
		});

		this.select_.dom().parentNode.style["background-color"] = color;
	}
	addMenuItem(menuText, dataValue) {
		this.select_.add(
				new MiSwDOM.Element("option")
				.attribute({value: dataValue})
				.add(new MiSwDOM.Element("text", menuText))
		);

		return this;
	}
}

export class Select extends SemanticUI {
	constructor(buttonText, color = "", callback) {
		super("span");
		this.items_ = []; /* The items in the dropdown */
		this
		.addClass("ui selection dropdown")
// .add(new MiSwDOM.Element("input").attribute({type:"hidden"}))
		.add(new Icon("dropdown"))
		.add(new MiSwDOM.Element("text", buttonText)).addClass("default text")
		.add(this.menu_ = new MiSwDOM.Element("div").addClass("menu"))
		;

		$(this.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				callback(value, text, $selectedItem);
			},
			sortSelect: true
		});

		this.menu_.dom().parentNode.style["background-color"] = color;
	}
	addMenuItem(menuText, dataValue, initialState = "") {
// console.log({menuText, dataValue, initialState});
		var item;
		this.menu_.add(item =
			new MiSwDOM.Element("div")
		.addClass("item").addClass(initialState)
		.dataset({value: dataValue})
		.add(new MiSwDOM.Element("text", menuText))
		);
		this.items_.push(item);

		return this;
	}
	disableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].addClass("disabled");
// this.menu_.readChild(item).addClass("disabled");
		}, this);
		return this;
	}
	enableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].removeClass("disabled");
// this.menu_.readChild(item).removeClass("disabled");
		}, this);
		return this;
	}
}





export class Table extends SemanticUI {
	constructor() {
		super("table");

		this
		.addClass("ui celled table")
		;

	}
}

export class TableRow extends SemanticUI {
	constructor() {
		super("tr");
	}
}

export class TableData extends SemanticUI {
	constructor(optionalText) {
		super("td");

		if (optionalText !== undefined)
			this.addText(optionalText);
	}
}

export class TableHead extends SemanticUI {
	constructor() {
		super("thead");

		this
		.add(new TableRow)
		;
	}
}

export class TableHeader extends SemanticUI {
	constructor(optionalText) {
		super("th");

		if (optionalText !== undefined)
			this.addText(optionalText);
	}
}


