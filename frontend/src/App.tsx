import * as React from "react";
import { DragDropContext } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import { SortableTreeWithoutDndContext as SortableTree } from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-file-explorer";

interface INode {
  title?: string;
  expanded?: boolean;
  children?: INode[];
}

interface IState {
  treeData: INode[];
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      treeData: [
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] }
      ]
    };
  }

  public render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={FileExplorerTheme}
        />
      </div>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);
