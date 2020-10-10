import React from "react";
import Search from "./Search";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

export default function StudentList({
  studentList,
  handleClick,
  handleChange
}) {
  return (
    <div className="StudentList">
      <Search handleChange={handleChange} />
      {studentList.map((student, index) => (
        <List
          key={student.id}
          component="nav"
          aria-label="main mailbox folders"
          onClick={() => handleClick(index)}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={student.name} />
          </ListItem>
        </List>
      ))}
    </div>
  );
}
